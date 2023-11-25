import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const MessageComponent = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    let timeout;

    if (isVisible) {
      // Configura um timeout para fechar a mensagem após 5 segundos
      timeout = setTimeout(() => {
        onClose();
      }, 3000);
    }

    // Limpa o timeout quando o componente é desmontado ou a mensagem é fechada
    return () => {
      clearTimeout(timeout);
    };
  }, [isVisible, onClose]);

  return (
    isVisible && (
      <View
        style={[
          styles.messageContainer,
          type === "success" ? styles.success : styles.error,
        ]}
      >
        <Text>{message}</Text>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    position: "absolute",
    bottom: 700,
    left: 40,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    zIndex: 1000, // Garante que a mensagem apareça sobre outros elementos
  },
  success: {
    backgroundColor: "green",
  },
  error: {
    backgroundColor: "red",
  },
});

export default MessageComponent;
