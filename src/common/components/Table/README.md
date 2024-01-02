# Table

render a table with a list of items from props : {data}

## Structure du Composant

Le composant `Table` est organisé en plusieurs sous-composants pour une clarté maximale et une réutilisation efficace. Chaque sous-composant a un rôle spécifique dans l'affichage et la gestion des données du tableau. Voici la disposition et la description de chaque sous-composant :

- `TableLenght`: Gère le nombre d'éléments à afficher dans le tableau.
- `TableFilter`: Fournit une fonctionnalité de recherche pour filtrer les données affichées dans le tableau.
- `table`: Le conteneur principal pour les données du tableau.
  - `TableHead`: Affiche l'en-tête du tableau, avec les titres des colonnes.
  - `TableBody`: Gère l'affichage des données dans le corps du tableau.
- `TableInfo`: Affiche des informations sur les données actuellement visibles dans le tableau.
- `TablePaginate`: Offre des contrôles de pagination pour naviguer entre les différentes pages de données.

## Utilisation du Composant `Table`

Pour utiliser le composant `Table`, passez les données sous forme d'un tableau d'objets à la prop `data` :

### Props

**data** _(array of objects, **required**)_:

- La prop `data` doit être un **tableau d'objets**, où chaque objet représente une **ligne** dans le tableau.
- Chaque objet peut avoir des **clés et des valeurs variées**. Les clés représentent les **en-têtes de colonnes** et les valeurs, les **données de chaque cellule**.

#### Exemple de structure de `data` :

```json
[
  { "name": "Alice", "age": 30, "department": "Sales" },
  { "name": "Bob", "age": 32, "department": "Marketing" }
]
```

#### Exemple d'utilisation

```jsx
<Table data={data} />
```

## Sous-composants de `Table`

### TableLength

Ce sous-composant permet à l'utilisateur de choisir le nombre de lignes à afficher dans le tableau.

#### Props

- `onChange`: Fonction appelée lors de la modification du nombre de lignes à afficher.

#### Exemple d'utilisation

```jsx
<TableLength onChange={handleLengthChange} />
```

### TableFilter

Permet de filtrer les données du tableau en fonction d'une chaîne de recherche.

#### Props

- `onChange`: Fonction appelée lors de la modification de la chaîne de recherche.

#### Exemple d'utilisation

```jsx
<TableFilter onChange={handleFilterChange} />
```

### TableInfo

Affiche des informations sur les données actuellement visibles dans le tableau, telles que le nombre total de lignes et les lignes affichées.

#### Props

- `total`: Nombre total de lignes.
- `current`: Nombre de lignes affichées.
- `length`: Nombre de lignes affichées par page.

#### Exemple d'utilisation

```jsx
<TableInfo />
```

### TablePaginate

Fournit des contrôles de pagination pour naviguer entre les pages de données du tableau.

#### Props

- `onPageChange`: Fonction appelée lorsqu'une nouvelle page est sélectionnée.
- `totalPages`: Nombre total de pages.
- `currentPage`: Page actuellement sélectionnée.

#### Exemple d'utilisation

```jsx
<TablePaginate
  onPageChange={handlePageChange}
  totalPages={totalPages}
  currentPage={currentPage}
/>
```

### TableHead

Gère l'affichage des en-têtes de colonnes du tableau et permet le tri des données.

#### Props

- `columns`: Un tableau décrivant les colonnes du tableau.
- `onSort`: Fonction appelée lorsqu'une colonne est triée.

#### Exemple d'utilisation

```jsx
<TableHead columns={columns} onSort={handleSort} />
```

### TableBody

Affiche les données du tableau dans le corps du tableau.

#### Props

- `data`: Données à afficher dans le tableau.

#### Exemple d'utilisation

```jsx
<TableBody data={data} />
```

## Fonctions du Composant `Table`

### Affichage du nombre d'éléments

Le composant `Table` permet à l'utilisateur de sélectionner le nombre d'éléments à afficher dans le tableau. Cette fonction est gérée par le sous-composant `TableLength` qui reçoit un callback pour mettre à jour le nombre d'éléments affichés.

### Recherche dans le tableau

Le composant `Table` inclut une fonction de recherche pour filtrer les données affichées. Cette fonction est gérée par le sous-composant `TableFilter` qui utilise un callback pour effectuer et refléter les changements de filtre.

### Tri des colonnes

Le composant `Table` permet le tri des données par colonnes. Les utilisateurs peuvent trier les données en ordre ascendant ou descendant en cliquant sur les en-têtes de colonne, grâce au sous-composant `TableHead`.

### Pagination du tableau

Pour les grands ensembles de données, le composant `Table` offre une fonctionnalité de pagination. Le sous-composant `TablePaginate` gère la navigation entre les pages de données.

### Affichage des informations du tableau

Le sous-composant `TableInfo` affiche des informations sur les données actuellement visibles, telles que le nombre total de lignes et les lignes affichées.

## Mise en œuvre

Ces fonctions sont intégrées dans le composant `Table` à travers ses sous-composants. Chaque sous-composant reçoit les props nécessaires pour gérer son comportement et interagir avec les données passées au composant `Table`. Ceci assure que `Table` est flexible et peut être utilisé dans n'importe quelle application React, avec ou sans Redux.
