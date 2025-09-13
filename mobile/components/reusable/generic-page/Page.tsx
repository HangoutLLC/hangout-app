import React, {PropsWithChildren} from 'react';
import {View, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';

type Padding = 'sm' | 'md' | 'lg';

type Variant = 'scroll' | 'fixed';

type Tone = 'background' | 'surface' | 'elevated';

type PageProps = PropsWithChildren<{
    padding?: Padding;
    variant?: Variant;
    tone?: Tone;
    safeEdges?: Array<'top' | 'bottom' | 'left' | 'right'>;
    statusBarStyle?: 'light' | 'dark' | 'auto';
    keyboardAvoiding?: boolean;
    extraBottomInset?: number;
    }>;

type ContainerProps = PropsWithChildren<{
    variant: Variant;
    keyboardAvoiding: boolean;
}>;

function Container({
    variant,
    keyboardAvoiding,
    children
}: ContainerProps) {
    if (variant === 'scroll'){
        const body = (
            <ScrollView
                keyboardShouldPersistTaps='handled'
                contentContainerStyle={{ flexGrow: 1 }}
            >
                {children}
            </ScrollView>);
            return keyboardAvoiding && Platform.OS === 'ios' 
                ? <KeyboardAvoidingView behavior ='padding' style={{ flex: 1 }}>{body}</KeyboardAvoidingView>
                : body;
    }
    return <>{children}</>
}

export function Page({
    children,
    padding = 'md',
    variant = 'scroll',
    tone = 'background',
    safeEdges = ['top', 'bottom'],
    statusBarStyle = 'auto',
    keyboardAvoiding = true,
    extraBottomInset = 0
}: PageProps) {
    const insets = useSafeAreaInsets();
    const { theme } = useTheme();
    const bg = 
        tone === 'background' ? theme.colors.background :
        tone === 'surface' ? theme.colors.surface :
        theme.colors.surfaceContainer;
    const t = theme.tokens.page;
    return (
        <SafeAreaView edges={safeEdges} style={{ flex: 1, backgroundColor: bg}}>
            <StatusBar style={statusBarStyle} />
            <Container variant ={variant} keyboardAvoiding={keyboardAvoiding}>
                <View style={{ flex: 1, alignItems: 'center'}}>
                    <View
                        style={{
                            flex: 1,
                            width: '100%',
                            paddingHorizontal: t.gutter[padding],
                            paddingBottom: (Math.max(insets.bottom, 0) + extraBottomInset),
                        }}
                    >
                        {children}
                    </View>
                </View>
            </Container>
        </SafeAreaView>
    );
}

Page.Header=function PageHeader({ children }: PropsWithChildren) {

    const { theme } = useTheme();
    const t = theme.tokens.page.header;
    return (
        <View 
            style={{ 
                height: t.height.page, 
                //justifyContent: 'center',
                gap: t.gap,
            }}
        >
            {children}
        </View>
    );
};

Page.Content=function PageContent({ children }: PropsWithChildren) {
    const { theme } = useTheme();
    const t = theme.tokens.page;
    return (
        <View 
            style={{ 
                flex: 1, 
                gap: t.contentGap,
            }}
        >
            {children}
        </View>
    );
};

Page.Footer=function PageFooter({ children, sticky=false }: PropsWithChildren<{sticky?: boolean}>) {
    const { theme } = useTheme();
    const t = theme.tokens.page.footer;
    return (
        <View 
            style={[ 
                sticky
                    ? {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: theme.colors.surfaceContainer,
                        padding: t.inset,
                        elevation: t.elevation, 
                    }
                  : {
                        paddingVertical: t.inset,
                  },  
            ]}
        >
            {children}
        </View>
    );
};