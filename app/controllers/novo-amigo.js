import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({
  mensagemDeResposta: '',
  email: '',

  isValid: match('email', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {
    salva() {
      alert(`Ta salvando a parada: ${this.get('email')}`);
      this.set('mensagemDeResposta', `Valeu salvou aqui: ${this.get('email')}`);
      this.set('email', '');
    }
  }
});
