const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/bfhl", (req, res) => {
  const data = req.body.data;

  if (!Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      user_id: "john_doe_123456",
      messsage: "Invalid input: 'data' must be an array.",
    });
  }

  const user_id = "john_doe_123456";
  const email = "john.doe@example.com";
  const roll_number = "123456";

  const odd_number = [];
  const even_number = [];
  const alphabets = [];
  const special_characters = [];
  const letters = [];

  let sum = 0;

  data.forEach((item) => {
    if (!isNaN(item)) {
      const num = Number(item);
    sum += num;
      if (num % 2 === 0) {
        even_number.push(item);
      } else {
        odd_number.push(item);
      }
    } else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
      letters.push(...item);
    } else {
      special_characters.push(item);
    }
  });


  const reversed = letters.reverse().join('');
  let concat_string = '';
  for(let i=0;i<reversed.length;i++){
    concat_string += i%2 === 0 ? reversed[i].toUpperCase() : reversed[i].toLowerCase();
  }

  res.json({
    is_success: true,
    user_id: user_id,
    email: email,
    roll_number: roll_number,
    odd_number: odd_number,
    even_number: even_number,
    alphabets: alphabets,
    special_characters: special_characters,
    sum: String(sum),
    concat_string: concat_string
  });
});


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}/bfhl`);
})