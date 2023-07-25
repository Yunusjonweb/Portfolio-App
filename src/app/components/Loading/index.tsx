import React from "react";
import { HStack, Spinner, Text } from "native-base";

const Loading = () => {
    return (
        <HStack
            space={2}
            justifyContent="center"
            alignItems="center"
            flex={1}
            backgroundColor="black.100"
            opacity="0.8"
            position="absolute"
            width="100%"
            height="100%"
        >
            <Spinner accessibilityLabel="Loading" color="blue.100" size="lg" />
            <Text color="blue.100" fontSize="lg">
                Loading
            </Text>
        </HStack>
    );
};

export default Loading;