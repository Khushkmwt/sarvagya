export const geetachapter = async (req, res) => {
    try {
        const response = await fetch('https://vedicscriptures.github.io/chapters');
        const data = await response.json();
        
        // Send the data in the response
      //  res.send(data);
        res.render("pages/bhagwatgeeta.ejs",data)
        // Optional: Log the data for debugging
       // console.log("Data:", data);
        console.log("Testing");
    } catch (error) {
        console.log("Error:", error);
        res.status(500).send("An error occurred");
    }
};
