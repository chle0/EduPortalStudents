import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { Appbar } from "react-native-paper";
import DrawerOpen from "../assets/svg/ic_menu.svg";
import SchoolInfo from "../assets/svg/ic_school_logo.svg";
import Notifications from "../assets/svg/ic_notifications.svg";
import EmptyNotifications from "../assets/svg/ic_empty_notifications.svg";
import BackIcon from "../assets/svg/ic_back.svg";
import theme from "../config/theme";
import { useNotifications } from "../utils/NotificationsContext";

const AppBar = () => {
  const navigation = useNavigation();
  const { hasUnreadNotifications, setHasUnreadNotifications } = useNotifications();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const unsubscribeOpen = navigation.addListener("drawerOpen", () => setIsDrawerOpen(true));
    const unsubscribeClose = navigation.addListener("drawerClose", () => setIsDrawerOpen(false));

    return () => {
      unsubscribeOpen();
      unsubscribeClose();
    };
  }, [navigation]);

  return (
    <Appbar.Header style={styles.container}>
      <Appbar.Action
        icon={() => (isDrawerOpen ? <BackIcon /> : <DrawerOpen />)}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        style={styles.leftIcon}
      />

      <View style={styles.rightIcons}>
        <Appbar.Action icon={() => <SchoolInfo />} />
        <Appbar.Action
          icon={() =>
            hasUnreadNotifications ? <EmptyNotifications /> : <Notifications />
          }
          onPress={() => setHasUnreadNotifications(!hasUnreadNotifications)}
        />
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    height: 44,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  leftIcon: {
    position: "absolute",
    left: 0,
  },
  rightIcons: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
  },
});

export default AppBar;
