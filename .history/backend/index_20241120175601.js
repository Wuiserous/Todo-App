import express from 'express'
import chrono from 'chrono-node';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/extract-datetime', (req, res) => {
    const { inputText } = req.body;

    if(!inputText) {
        return res.status(400).json({error: 'No input text provided'});
    }

    const result = chrono.parse(inputText);
    if (result.length > 0) {
        const parseDate = result[0].start.date();
        res.json({
            date: parseDate.toLocaleDateString(),
            time: parseDate.toLocaleTimeString(),
        });
    }else {
        res.status(400).json({error: 'Invalid input text'});
    }
})





