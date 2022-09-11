import { Chats, Calls, Status, Story } from "../screens";
import { Icon } from "../components";

export default [
  {
    name: "Story",
    component: Story,
    options: {
      tabBarIcon: () => {
        return (
          <Icon iconName="camera-outline" iconSize={16} iconColor="black" />
        );
      },
      tabBarLabel: () => null,
    },
  },
  {
    name: "Chats",
    component: Chats,
    options: {},
  },
  {
    name: "Calls",
    component: Calls,
    options: {},
  },
  {
    name: "Status",
    component: Status,
    options: {},
  },
];
