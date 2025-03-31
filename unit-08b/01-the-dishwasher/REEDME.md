## 🔹 **Step-by-Step Breakdown of the Washing Process**

## Author:
Massimo Musso

1. **Initial State**  
   - There are **three dirty stacks** with a random number of plates (between 10 and 50 each).  
   - The clean stack is **initially empty**.

2. **Washing Process**  
   - The dishwasher removes up to **two plates per cycle**.  
   - It prioritizes **Stack 1 and Stack 2** first.  
   - If either of these stacks runs out of plates, it starts taking plates from **Stack 3**.

3. **Dynamic Stack Reduction**  
   - Each iteration reduces the size of the dirty stacks by **one or two plates**.  
   - **Example Scenario:**
     - Stack 1: `[Plate 1A, Plate 2A, Plate 3A]`
     - Stack 2: `[Plate 1B, Plate 2B]`
     - Stack 3: `[Plate 1C, Plate 2C, Plate 3C, Plate 4C]`
     - First wash: `Plate 3A` and `Plate 2B` are moved to the clean stack.
     - Second wash: `Plate 2A` and `Plate 1B` are moved to the clean stack.
     - Third wash: `Plate 1A` and `Plate 1C` are moved to the clean stack.
     - Now Stack 1 and Stack 2 are empty, so only Stack 3 continues to be washed.

4. **End Condition**  
   - The process **repeats until all dirty stacks are empty**.  
   - Once finished, all plates are in the **clean stack**, and the simulation ends.

---

## **Key Takeaways**
- The dishwasher washes **two plates per cycle** when possible.  
- **Stack 1 and Stack 2 are prioritized** over Stack 3.  
- Once a stack is emptied, the dishwasher continues with the remaining stacks.  
- The simulation **stops when all plates are washed**.

This method ensures that plates are cleaned in a structured and efficient manner, simulating a real-world dishwashing process.
