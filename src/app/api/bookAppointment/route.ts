import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, phone, date, time, service, message } = req.body;

        const scriptUrl = 'https://script.google.com/macros/s/AKfycbyOSEoXp5CA_TOPaCoz3rfgJu-pizEr2GiznmgqtJWrhtsriPh7P_C58QbaJC-iZ_FN/exec'; // Replace with your Google Apps Script URL

        try {
            const response = await fetch(scriptUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, phone, date, time, service, message }),
            });

            if (response.ok) {
                res.status(200).json({ result: 'success' });
            } else {
                res.status(500).json({ result: 'error', message: 'Failed to submit form' });
            }
        } catch (error) {
            res.status(500).json({ result: 'error', message: (error as Error).message });
        }
    } else {
        res.status(405).json({ result: 'error', message: 'Method not allowed' });
    }
}
