// Mock pour document.querySelectorAll('[data-cell]')
const mockCellElements = [
    { classList: { contains: jest.fn().mockReturnValue(false) } }, // Mock de la méthode contains de classList pour chaque élément simulé
    { classList: { contains: jest.fn().mockReturnValue(false) } },
    // Ajoutez autant d'éléments simulés que nécessaire
  ];
  
  // Mock pour document.getElementById('board')
  const mockBoard = {
    classList: {
      remove: jest.fn(), // Mock de la méthode remove de classList
      add: jest.fn() // Mock de la méthode add de classList
    }
  };
  
  // Mock pour document.getElementById('winningMessage')
  const mockWinningMessageElement = {
    classList: {
      remove: jest.fn(),
      add: jest.fn()
    }
  };
  
  // Mock pour document.getElementById('restartButton')
  const mockRestartButton = {
    addEventListener: jest.fn() // Mock de la méthode addEventListener
  };
  
  // Mock pour document.querySelector('[data-winning-message-text]')
  const mockWinningMessageTextElement = {
    innerText: '' // Mock de la propriété innerText
  };
  
  global.document.querySelectorAll = jest.fn().mockReturnValue(mockCellElements); // Mock de la méthode querySelectorAll de document
  global.document.getElementById = jest.fn().mockImplementation(id => {
    if (id === 'board') return mockBoard; // Mock de la méthode getElementById de document
    if (id === 'winningMessage') return mockWinningMessageElement;
    if (id === 'restartButton') return mockRestartButton;
    return null;
  });
  global.document.querySelector = jest.fn().mockReturnValue(mockWinningMessageTextElement); // Mock de la méthode querySelector de document
  
  const X_CLASS = 'x'
  const CIRCLE_CLASS = 'circle'
  const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  let circleTurn
  
  startGame()
  
