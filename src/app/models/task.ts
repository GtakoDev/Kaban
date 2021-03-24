export interface Task {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly type: string; // bug ou évolution
  // statut ?
}

export const mockTasks: Task[] = [
  {
    id: 1,
    name: 'Créer les cards',
    description: 'Composant card réutilisable, il contiendra les données des tasks',
    type: 'évolution'
  },
  {
    id: 2,
    name: 'Créer board',
    description: '3 tableau dans lesquels on fera le drag and drop des différentes card',
    type: 'évolution'
  },
  {
    id: 3,
    name: 'Filtre',
    description: 'Permet d\'afficher uniquement les cards contenant le titre renseigné ( debounce rxjs )',
    type: 'évolution'
  },
  {
    id: 4,
    name: 'Type de Task',
    description: 'Créer les types qui seont utilisé par les tasks. Ces types seront bug ou évolution',
    type: 'évolution'
  },
  {
    id: 5,
    name: ' + Button',
    description: 'Un bouton + dans chaque colonne qui ajoute une nouvelle carte ( popup avec un formulaire ou on rentre des données',
    type: 'évolution'
  },
  {
    id: 6,
    name: ' + / - Button ',
    description: 'Un boutton qui permet d\'agrandir ou réduire une card pour voir sont contenu plus en détail (Event Emitter angular pour log)',
    type: 'évolution'
  },
  {
    id: 7,
    name: 'Edit Butotn',
    description: 'présent dans chaque task permet de modifier la task',
    type: 'évolution'
  },
  {
    id: 8,
    name: 'restriction de drag and drop',
    description: 'une carte qui est dans en cours ou a terminer ne peut plus etre mise à a faire',
    type: 'évolution'
  }
];
