const { miniID, MegaID } = require('./tuArchivoConLasFunciones');

describe('miniID', () => {
  test('Debe generar un ID de longitud predeterminada', () => {
    const id = miniID();
    expect(id.length).toBe(5); // Comprueba si la longitud del ID es 5
  });

  test('Debe generar un ID de longitud personalizada', () => {
    const id = miniID({ length: 7 });
    expect(id.length).toBe(7); // Comprueba si la longitud del ID es 7
  });

  test('Debe generar un ID con repeticiones si se especifica', () => {
    const id = miniID({ repeat: true });
    const uniqueChars = new Set(id);
    expect(id.length).toBe(uniqueChars.size); // Comprueba si no hay repeticiones en el ID
  });

  test('Debe generar un ID con combinaciones personalizadas de caracteres', () => {
    const id = miniID({ groups: ['low', 'upp'] });
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    expect(lowercaseRegex.test(id)).toBeTruthy(); // Comprueba si el ID contiene caracteres en minúsculas
    expect(uppercaseRegex.test(id)).toBeTruthy(); // Comprueba si el ID contiene caracteres en mayúsculas
  });
});

describe('MegaID', () => {
  test('Debe generar un ID de longitud predeterminada', () => {
    const id = MegaID();
    expect(id.length).toBe(25); // Comprueba si la longitud del ID es 25
  });

  test('Debe generar un ID de longitud personalizada', () => {
    const id = MegaID({ length: 50 });
    expect(id.length).toBe(50); // Comprueba si la longitud del ID es 50
  });

  test('Debe generar un ID con repeticiones si se especifica', () => {
    const id = MegaID({ repeat: true });
    const uniqueChars = new Set(id);
    expect(id.length).toBe(uniqueChars.size); // Comprueba si no hay repeticiones en el ID
  });

  test('Debe generar un ID con combinaciones personalizadas de caracteres', () => {
    const id = MegaID({ groups: ['num', 'low', 'upp'] });
    const numericRegex = /[0-9]/;
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    expect(numericRegex.test(id)).toBeTruthy(); // Comprueba si el ID contiene caracteres numéricos
    expect(lowercaseRegex.test(id)).toBeTruthy(); // Comprueba si el ID contiene caracteres en minúsculas
    expect(uppercaseRegex.test(id)).toBeTruthy(); // Comprueba si el ID contiene caracteres en mayúsculas
  });
});
