import { useState} from "react";
import { memo} from "react";
import {Box, Input, Button} from "@chakra-ui/react";


const Contador = memo(({value}) => {
    console.log("contador...")
    return <h1> (value) </h1>

});


const Memo = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const handleChange = (e) => {
        console.log(e.target.value)
        setText(e.target.value)
    }

    return(
        <Box>
            <Button onClick={() => setCount(count +1)}>+1</Button>
        <Input value={text} onChange={handleChange} placeholder="ingrese aqui..." type="text"    />
        <Contador value= {count} />
        </Box>
    )
};

export default memo;