const es = {
  translation: {
    components: {
      categorySummaryList: {
        title: 'Tus gastos de este mes',
        summaryTitle: 'Tu resúmen',
        analyzeExpenses: 'Analizar gastos',
        analyzeCategories: 'Analizar categorías',
        noExpenses: 'Sin gastos este mes',
        total: 'Total',
      },
      expensesList: {
        emptySubtitle: 'No tienes gastos',
        addExpense: 'Agregar un gasto',
        yourExpenses: 'Últimos gastos',
        seeAll: 'Ver todos',
      },
      pieChart: {
        total: 'Gastado',
      },
      incomeSummaryList: {
        title: 'Restante',
      },
      recurrenceSelector: {
        none: 'Ninguno',
        monthly: 'Mensual',
        annually: 'Anual',
      },
      currencySelector: {
        title: 'Moneda del sueldo',
        conversionTitle: 'Moneda de conversión',
        conversionDescription:
          'Esto te permite ver tus gastos o sueldo en la moneda seleccionada',
        placeholder: 'Elige una moneda',
      },
    },
    global: {
      continue: 'Continuar',
      update: 'Actualizar',
      confirm: 'Confirmar',
    },
    landing: {
      signUp: 'Crear Cuenta',
      login: 'Iniciar Sesión',
    },
    enterEmail: {
      title: 'Ingresa tu email',
      inputTitle: 'Email',
      inputRequired: 'Ingresa un email',
      inputValid: 'Ingresa un email válido',
    },
    enterName: {
      title: 'Ingresa tu nombre',
      inputRequired: 'Ingresa tu nombre',
      inputLength: 'Tu nombre debe tener al menos 4 caracteres',
    },
    enterIncome: {
      title: 'Ingresa tu sueldo',
      income: 'Sueldo',
      inputRequired: 'Ingresa tu sueldo',
    },
    enterPassword: {
      title: 'Ingresa tu contraseña',
      password: {
        title: 'Contraseña',
        placeholder: 'Ingresa tu nueva contraseña',
        required: 'Ingresa tu nueva contraseña',
        minLength: 'Al menos 8 caracteres',
        symbol: 'Al menos 1 símbolo',
        casing: 'Al menos 1 mayúscula',
        number: 'Al menos 1 número',
      },
      confirmPassword: {
        title: 'Confirmar contraseña',
        placeholder: 'Confirmá tu contraseña',
        required: 'Confirmá tu contraseña',
        noMatch: 'Debe coincidir con tu nueva contraseña',
      },
      error: {
        emailExists: 'El email ya esta registrado',
      },
    },
    login: {
      title: 'Iniciar Sesión',
      emailInputTitle: 'Email',
      emailInputPlaceholder: 'Ingresa tu email',
      passwordInputTitle: 'Contraseña',
      passwordInputPlaceholder: 'Ingresa tu contraseña',
      passwordLengthError: 'Ingresa al menos 8 caracteres',
      forgotPassword: 'Olvidaste tu contraseña?',
      primaryButton: 'Iniciar Sesión',
    },
    home: {
      title: 'Hola, {{name}}!',
    },
    menu: {
      title: 'Menu',
      logOut: 'Cerrar sesión',
      closeAccount: 'Cerrar cuenta',
      currency: 'Moneda',
      option: {
        currency: 'Tus monedas',
        income: 'Tu sueldo',
      },
    },
    expense: {
      title: 'Nuevo gasto',
      updateTitle: 'Actualizar gasto',
      selectCategory: 'Elige una categoría',
      updateCategory: 'Categorías',
      successMessage: '{{name}} creado correctamente!',
      updateSuccessMessage: '{{name}} se ha actualizado correctamente!',
      name: {
        title: 'Nombre',
        placeholder: 'Ingresa el nombre del gasto',
        required: 'Ingresa un nombre',
      },
      date: {
        title: 'Fecha',
        modalTitle: 'Elige una fecha',
      },
      recurrence: {
        title: 'Recurrencia',
        modalTitle: 'Elige la recurrencia',
      },
      currency: {
        title: 'Moneda',
        modalTitle: 'Elige una moneda',
      },
      amount: {
        title: 'Monto',
        placeholder: 'Ingresa el monto del gasto',
        required: 'Ingresa un monto',
      },
      description: {
        title: 'Descripción (Opcional)',
        placeholder: 'Ingresa la descripción',
        required: 'Ingresa una descripción',
      },
    },
    expenses: {
      title: 'Todos los gastos',
    },
    analyzeExpenses: {
      title: 'Resumen',
      expended: 'Gastado',
      current: 'Gastos de este mes',
      upcoming: 'Próximos gastos',
      average: 'Promedio gastado por mes',
    },
    analyzeCategory: {
      expenseTitle: 'Tienes {{amount}} gastos',
      expensesTitle: 'Tienes {{amount}} gastos',
      average: 'Promedio por mes',
      total: 'Total',
    },
    categoriesList: {
      title: 'Categorías',
    },
    income: {
      title: 'Tu sueldo',
      message: 'Tu sueldo ha sido actualizado!',
    },
    currencyList: {
      title: 'Monedas',
      selected: 'Seleccionado',
    },
  },
};

export default es;
