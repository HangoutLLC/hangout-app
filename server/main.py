import httpx
import jwt
import os
import json

from jwt.algorithms import ECAlgorithm
from dotenv import load_dotenv
from typing import Optional
from fastapi import FastAPI, Request, HTTPException, Depends, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.middleware.cors import CORSMiddleware # Added for CORS for development

from supabase.client import create_client, Client


app = FastAPI()
security = HTTPBearer()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or specify your frontend's origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

load_dotenv(os.path.join(os.path.dirname(__file__), "..", ".env"))


url = os.getenv("SUPABASE_URL")
key = os.getenv("SUPABASE_KEY")

if not url or not key:
    raise RuntimeError("SUPABASE_URL and SUPABASE_KEY must be set in the environment")


supabase: Client = create_client(url, key)


async def get_supabase_public_keys() -> list[dict]:
    async with httpx.AsyncClient() as client:
        jwks_url = f"{url}/auth/v1/.well-known/jwks.json"
        response = await client.get(jwks_url)
        response.raise_for_status()
        return response.json()["keys"]


def get_kid(token: str) -> str:
    headers = jwt.get_unverified_header(token)
    return headers["kid"]


async def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
) -> str:
    token = credentials.credentials
    public_keys = await get_supabase_public_keys()
    kid = get_kid(token)

    key_dict = next((key for key in public_keys if key["kid"] == kid), None)
    if not key_dict:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token key ID"
        )

    try:
        payload = jwt.decode(
            token,
            key = jwt.PyJWK.from_dict(key_dict).key,
            algorithms=["ES256"],
            audience="authenticated",
            issuer=f"{url}/auth/v1",
        )
        user_id = payload.get("sub")
        if not user_id:
                raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User ID not found in token")
        return user_id
    except jwt.PyJWTError as e:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=f"Token error: {str(e)}")

@app.get("/events")
async def list_events(user_id: str = Depends(get_current_user)):
    response = supabase.table("events").select("*").eq("user_id", user_id).execute()
    return {"user_id": user_id, "events": response.data}

@app.get("/user-data")
async def get_user_data(user_id: str = Depends(get_current_user)):
    user_resp = supabase.table("users").select("*").eq("id", user_id).single().execute()
    event_resp = supabase.table("events").select("*").eq("creater_id", user_id).execute()
    return {
        "user": user_resp.data,
        "events": event_resp.data
    }