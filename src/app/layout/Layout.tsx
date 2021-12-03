import React from "react";
import{Center,Container,Flex} from "@chakra-ui/react"
import NavBar from "./NavBar"
interface Props {
    
}
 
const Layout: React.FC = ({children}) => {
    return <Flex direction="column" backgroundColor="gray.100"flex={1}>
        <NavBar>

        </NavBar>
            <Center paddingY={6}>
                                <Container maxWidth="6xl">{children}</Container>
            </Center>

    </Flex>;
}
 
export default Layout ;