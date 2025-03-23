# Differenza tra `slice()` e `splice()` in JavaScript

Entrambi i metodi `slice()` e `splice()` vengono utilizzati per manipolare gli array in JavaScript, ma differiscono nei parametri, nel comportamento e nell'effetto sull'array originale.

## 1. `slice()`
- **Scopo**: Estrae una porzione di un array senza modificarlo.
- **Parametri**:
  1. `start` (opzionale) – Indice di inizio dell'estrazione.
  2. `end` (opzionale) – Indice prima del quale fermare l'estrazione (non incluso).
- **Restituisce**: Un nuovo array con gli elementi estratti.
- **Modifica l'array originale?**  No.

### **Esempio di `slice()`**
```javascript
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
let slicedFruits = fruits.slice(1, 4); // Estrae da indice 1 a 3

console.log(slicedFruits); // ["banana", "cherry", "date"]
console.log(fruits); // ["apple", "banana", "cherry", "date", "elderberry"] (immutato)
```

---

## 2. `splice()`
- **Scopo**: Aggiunge, rimuove o sostituisce elementi in un array.
- **Parametri**:
  1. `start` – Indice di inizio della modifica.
  2. `deleteCount` (opzionale) – Numero di elementi da rimuovere.
  3. `item1, item2, ...` (opzionale) – Elementi da inserire.
- **Restituisce**: Un array con gli elementi rimossi.
- **Modifica l'array originale?**  Sì.

### **Esempio di `splice()` (Rimuovere elementi)**
```javascript
let colors = ["red", "green", "blue", "yellow"];
let removedColors = colors.splice(1, 2); // Rimuove 2 elementi da indice 1

console.log(removedColors); // ["green", "blue"]
console.log(colors); // ["red", "yellow"] (modificato)
```

### **Esempio di `splice()` (Aggiungere elementi)**
```javascript
let numbers = [1, 2, 3, 6];
numbers.splice(3, 0, 4, 5); // Inserisce 4 e 5 all'indice 3 senza rimuovere nulla

console.log(numbers); // [1, 2, 3, 4, 5, 6] (modificato)
```

### **Esempio di `splice()` (Sostituire elementi)**
```javascript
let animals = ["cat", "dog", "rabbit"];
animals.splice(1, 1, "elephant", "tiger"); // Sostituisce "dog" con "elephant" e "tiger"

console.log(animals); // ["cat", "elephant", "tiger", "rabbit"]
```

---

## **Differenze Chiave**

| Caratteristica  | `slice()`  | `splice()` |
|---------------|----------|------------|
| **Modifica l'array originale?** |  No |  Sì |
| **Restituisce** | Un nuovo array con gli elementi estratti | Gli elementi rimossi (o un array vuoto) |
| **Scopo** | Estrarre una porzione senza modificare l'array | Aggiungere, rimuovere o sostituire elementi |
| **Parametri** | `(start, end)` | `(start, deleteCount, items...)` |

---

## **Conclusione**
- Usa `slice()` quando hai bisogno di una copia di parte di un array senza modificarlo.
- Usa `splice()` quando devi modificare l'array originale aggiungendo, rimuovendo o sostituendo elementi.
