import Controller from '@ember/controller';
import { match, not, and } from '@ember/object/computed';

export default Controller.extend({

  mensagemDeResposta: '',
  email: '',
  nome: '',

  isValid: match('email', /^.+@.+\..+$/),
  valid: not('isValid'),
  tnome: not('nome'),
  isDisabled: and('valid', 'tnome'),

  actions: {
    salva() {
      //console.log(`Ta salvando a parada: ${this.get('email')}`);
      this.set('mensagemDeResposta', `Valeu salvou aqui: ${this.get('email')}`);
      this.set('email', '');
    }
  }
});
