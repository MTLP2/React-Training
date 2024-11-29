# 🚀 Exercice React : Comprendre les mises à jour du State

## **Objectif**
Cet exercice vise à comprendre pourquoi les mises à jour du state (`setState`) en React ne sont pas immédiates et comment utiliser correctement le `prevState` pour enchaîner plusieurs mises à jour d'état sans erreurs.

---

## **Fichiers inclus**
- `App.jsx` : Contient le code de l'exercice.
- `README.md` : Ce fichier, avec les instructions et la correction.

---

## **Exercice**

### **Description du problème**
Dans React, les mises à jour d'état via `setState` sont asynchrones. Si vous essayez d'appeler plusieurs fois `setCount` dans une même fonction en vous basant sur une **valeur actuelle du state** (comme `count`), vous risquez d'obtenir des résultats inattendus. 

**Exemple initial :**
```jsx
const handleIncrement = () => {
  setCount(count + 2); // Supposé ajouter 2
  setCount(count + 2); // Supposé ajouter encore 2, mais ça ne marche pas
};
```

## **Instructions**

### Observer le comportement :
1. **Exécutez le code initial et cliquez sur le bouton.**
2. **Notez que le compteur n'ajoute pas +4 comme attendu.**

### Comprendre pourquoi :
- Le problème vient du fait que `setCount` n'utilise pas automatiquement l'état le plus récent lorsqu'il est appelé plusieurs fois dans une même fonction.

### Corriger la logique :
- Vous devez garantir que chaque mise à jour utilise la dernière valeur de `count`.
- **Astuce** : Réfléchissez à une manière d'utiliser la valeur la plus récente pour chaque mise à jour.

---

## **Solution**

### **Code corrigé : Utilisation de `prevState`**
Pour garantir que chaque mise à jour utilise la valeur la plus récente de `count`, nous utilisons une fonction de mise à jour dans `setCount`, comme ceci :

```jsx
const handleIncrement = () => {
  setCount(prev => prev + 2); // Ajoute 2 à la valeur actuelle de `count`
  setCount(prev => prev + 2); // Ajoute encore 2 à la nouvelle valeur
};
```


---

## **Points à retenir**
1. **Asynchronie des mises à jour d'état** : Les mises à jour du state dans React sont planifiées et ne sont pas immédiates.
2. **Utilisation de `prevState`** : Utilisez une fonction basée sur l'état précédent (`prevState`) pour garantir des mises à jour fiables lorsque vous enchaînez plusieurs appels à `setState`.
3. **Bonnes pratiques** : Toujours réfléchir à la manière dont React gère l'état lorsqu'on utilise plusieurs mises à jour dans une même fonction.
