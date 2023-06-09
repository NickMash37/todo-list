import { Button } from "@mui/material";

const InputField = ({text, handleInput, handleSubmit}) => {
    return (
        <label>
        <input value={text} onChange={(e) => handleInput(e.target.value)}></input>
        <Button variant='contained' onClick={handleSubmit} sx={{
          background: 'orange',
          fontSize: '18px',

          '&:hover': {
            background: 'green'
          }
        }}>Add to do</Button>
      </label>

    )
}

export default InputField;