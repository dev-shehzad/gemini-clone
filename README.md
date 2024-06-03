# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Project Structure

The project is structured into several key components, each responsible for a part of the application's functionality:

- `Navbar`: This component contains the navigation and recent chats list.
- `Sidebar`: This component contains the navigation and recent chats list.
- `ChatArea`: Displays the chat messages between users.
- `InputChat`: Allows users to input and send messages.

## Customizing the Sidebar

### Changing the Sidebar Message Icon

The sidebar message icon is part of the `Sidebar` component. To change the icon:

1. Navigate to `src/components/Sidebar/Sidebar.js`.
2. Locate the `<IoChatboxOutline />` icon within the `Sidebar` .
3. Replace `<IoChatboxOutline />` with your desired icon. Ensure you've imported the new icon at the top of the file.

### Modifying the Sidebar Footer Icons

To update the sidebar Footer Icons Like Settings etc

1. Open `src/components/Sidebar/Sidebar.js`.
2. In the `sidebar_footer` div, replace the `IoIosHelpCircleOutline` with your Icon.

## Customizing the Chat Area

### Changing Chat Icons

Chat icons can be found in the `ChatArea` component:

1. Go to `src/components/ChatArea/ChatArea.js`.
2. Locate the icon components within the chat messages and replace them as needed.

## Customizing the Input Chat

### Changing Placeholder Text

To change the placeholder text in the input field:

1. Open `src/components/InputChat/InputChat.js`.
2. Find the `input` element and modify the `placeholder` attribute value to your desired text.

## Additional Customizations

The project is built with React, allowing for extensive customization beyond what is covered in this guide. Feel free to explore the component files and adjust styles, functionality, and layout to meet your needs.

## Conclusion

This documentation provides a starting point for customizing the chat application. If you have any questions or require further assistance, please don't hesitate to reach out. Happy customizing!
