const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/

export function balanceValidator (message?: string) {
  return false
}

export function emailValidator (email: string) {
  return email ? emailPattern.test(email) || 'Adresse e-mail invalide' : true
}

export function mandatoryValidator (field: any) {
  return !!field || 'Champ obligatoire'
}

export function textValidatorToFixed2 (val: string) {
  return val ? val.length > 1 || 'Entrer plus de 2 caractères' : true
}

export function textValidatorToFixed3 (val: string) {
  return val ? val.length > 2 || 'Entrez plus de 3 caractères' : true
}
