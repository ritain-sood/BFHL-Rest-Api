const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/bfhl", (req, res) => {
  const data = req.body.data;

  if (!Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      user_id: "ritain_sood_2211985040",
      messsage: "Invalid input: 'data' must be an array.",
    });
  }

  const user_id = "ritain_sood_2211985040";
  const email = "ritain5040.be22@chitkarauniversity.edu.in";
  const roll_number = "2211985040";

  const odd_number = [];
  const even_number = [];
  const alphabets = [];
  const special_characters = [];
  const letters = [];

  let sum = 0;

  data.forEach((item) => {
    if (!isNaN(item)) {
      const sum = Number(item);
      sum += Number;
      if (num % 2 === 0) {
        even_number.push(item);
      } else {
        odd_number.push(item);
      }
    } else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
      concat_string.push(...item);
    } else {
      letters.push(item);
    }
  });



  const reversed = special_characters.reverse().join('');
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
