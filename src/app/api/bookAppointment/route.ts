export async function POST(req: Request) {
  try {
      const { name, email, phone, date, time, service, message } = await req.json();

      const scriptUrl = 'https://script.google.com/macros/s/AKfycbyOSEoXp5CA_TOPaCoz3rfgJu-pizEr2GiznmgqtJWrhtsriPh7P_C58QbaJC-iZ_FN/exec'; // Replace with your Google Apps Script URL

      const response = await fetch(scriptUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, phone, date, time, service, message }),
      });

      if (response.ok) {
          return new Response(JSON.stringify({ result: 'success' }), { status: 200 });
      } else {
          return new Response(JSON.stringify({ result: 'error', message: 'Failed to submit form' }), { status: 500 });
      }
  } catch (error) {
      return new Response(JSON.stringify({ result: 'error', message: (error as Error).message }), { status: 500 });
  }
}
