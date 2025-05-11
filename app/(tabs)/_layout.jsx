import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import Colors from '../../theme/colors';

const CustomTabButton = ({ accessibilityState, style, ...props }) => {
    const selected = accessibilityState?.selected;

    return (
        <Pressable
            {...props}
            style={(state) => {

                const baseStyle = typeof style === 'function' ? style(state) : style;

                return [
                    baseStyle,
                    {
                        flex: 1,
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }
                ];
            }}
            android_ripple={{
                color: Colors.greenArea.button.androidRipple,
                foreground: true,
            }}
            ios_backgroundColor={Colors.greenArea.button.androidRipple}
        >
        </Pressable>
    );
};

export default function TabLayout() {
    return (
        <>
            <Tabs
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerTintColor: Colors.whiteArea.text,
                    headerStyle: {
                        backgroundColor: Colors.whiteArea.background,
                        height: 40,
                        elevation: 0
                    },
                    tabBarActiveTintColor: Colors.greenArea.button.textActive,
                    tabBarInactiveTintColor: Colors.greenArea.button.textInactive,
                    tabBarActiveBackgroundColor: Colors.greenArea.button.backgroundActive,
                    tabBarStyle: {
                        elevation: 0,
                        borderTopWidth: 0,
                        backgroundColor: Colors.greenArea.background,
                        height: 65
                    },
                }}
            >

                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                        ),
                        tabBarButton: (props) => <CustomTabButton {...props} />,
                    }}
                />

                <Tabs.Screen
                    name="pda"
                    options={{
                        title: 'PDA',
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons name={focused ? 'layers-sharp' : 'layers-outline'} color={color} size={24} />
                        ),
                        tabBarButton: (props) => <CustomTabButton {...props} />,
                    }}
                />

                <Tabs.Screen
                    name="dashboard"
                    options={{
                        title: 'Dashboard',
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons name={focused ? 'grid-sharp' : 'grid-outline'} color={color} size={24} />
                        ),
                        tabBarButton: (props) => <CustomTabButton {...props} />,
                    }}
                />

                <Tabs.Screen
                    name="options"
                    options={{
                        title: 'Options',
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons name={focused ? 'settings-sharp' : 'settings-outline'} color={color} size={24} />
                        ),
                        tabBarButton: (props) => <CustomTabButton {...props} />,
                    }}
                />

            </Tabs>
        </>
    );
}