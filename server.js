// Step 6: Create a decision block with dialogue
app.get('/decision1', (req, res) => {
    console.log('Storyline dialogue before the decision.');
  
    console.log('Option A: Do something that raises Meter 1 and lowers Meter 2');
    console.log('Option B: Do something that lowers Meter 1 and raises Meter 2');
  
    res.send('Choose option A or B and see what happens!');
  });
  
  // Step 7: Handle user input
  app.post('/decision1', async (req, res) => {
    const choice = req.body.choice;
  
    // Update Meter 1 and Meter 2 values based on the user's choice
    if (choice === 'A') {
      await Meter1.updateOne({}, { $inc: { value: 10 } });
      await Meter2.updateOne({}, { $inc: { value: -5 } });
    } else if (choice === 'B') {
      await Meter1.updateOne({}, { $inc: { value: -10 } });
      await Meter2.updateOne({}, { $inc: { value: 5 } });
    }
  
    console.log('Storyline dialogue after the decision, based on the user\'s choice.');
  
    res.send('See what happens next in the story!');
  });
  