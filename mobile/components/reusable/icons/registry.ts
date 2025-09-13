// registry.ts
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

export type MatName = keyof typeof MaterialIcons.glyphMap;
export type IonName = keyof typeof Ionicons.glyphMap;

type IconEntry =
  | { pack: 'MaterialIcons'; name: MatName; rtlName?: MatName }
  | { pack: 'Ionicons';      name: IonName; rtlName?: IonName };

export const ICONS = {
    // navigation
    add:          { pack: 'MaterialIcons', name: 'add' },
    close:        { pack: 'MaterialIcons', name: 'close' },
    edit:         { pack: 'MaterialIcons', name: 'edit' },
    delete:       { pack: 'MaterialIcons', name: 'delete' },
    search:       { pack: 'Ionicons',      name: 'search' },

    // time + location
    calendar:     { pack: 'Ionicons',      name: 'calendar-outline' },
    clock:        { pack: 'Ionicons',      name: 'time-outline' },
    location:     { pack: 'Ionicons',      name: 'location-outline' },

    // meta
    check:        { pack: 'Ionicons',      name: 'checkmark' },
    warning:      { pack: 'Ionicons',      name: 'warning-outline' },
    error:        { pack: 'MaterialIcons', name: 'error-outline' },
    info:         { pack: 'Ionicons',      name: 'information-circle-outline' },

    // social
    person:       { pack: 'Ionicons',      name: 'person-outline' },
    group:        { pack: 'Ionicons',      name: 'people-outline' },
    chat:         { pack: 'Ionicons',      name: 'chatbubble-ellipses-outline' },

    // directional
    chevronStart: { pack: 'Ionicons',      name: 'chevron-back',    rtlName: 'chevron-forward' },
    chevronEnd:   { pack: 'Ionicons',      name: 'chevron-forward', rtlName: 'chevron-back' },
    arrowStart:   { pack: 'Ionicons',      name: 'arrow-back',      rtlName: 'arrow-forward' },
    arrowEnd:     { pack: 'Ionicons',      name: 'arrow-forward',   rtlName: 'arrow-back' },
} satisfies Record<string, IconEntry>;

export type IconKey = keyof typeof ICONS;