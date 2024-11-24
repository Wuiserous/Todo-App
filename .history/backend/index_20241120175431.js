import express from 'express'
import chrono from 'chrono-node';
import cors from 'cors';

const app = express()

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
            date: parseDate,toLocaldateString()
        })
    }
})

