import react from "@vitejs/plugin-react-swc";
import { div } from "framer-motion/client";
import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div>Not Found
            <Text onClick={() => navigate("/")} >Volver al Inicio</Text>
        </div>

    )

};

export default NotFound;