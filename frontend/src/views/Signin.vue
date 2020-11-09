<template>
  <b-container>
    <b-row>
      <!-- <b-col> -->
      <div class="signin">
        <logo-component />
        <b-row>
          <legend>Email</legend>
          <input-component
            class="input-signin"
            :input-type="'mail'"
            :planceHolder="'ej: usuario@mail.com'"
            :userData="getUserEmail"
            @dataInput="mailUpdated"
          />
          <error-component :msg="'Necesitamos tu email'" v-if="mailMust" />
        </b-row>
        <b-row class="signin-password">
          <legend>Contraseña</legend>
          <input-component
            class="input-signin"
            :input-type="'password'"
            :planceHolder="'Escribe tu contraseña'"
            :userData="getUserPassword"
            @dataInput="passwordUpdated"
          />
          <error-component
            :msg="'Necesitamos tu contraseña'"
            v-if="passwordMust"
          />
          <a id="recover-password" href="/">¿Olvidaste tu contraseña?</a>
        </b-row>
        <b-row>
          <button-component
            :comp-class="'button-signin'"
            :title="'Ingresar a mi cuenta'"
            @btn-press="signInReady"
          />
        </b-row>
      </div>
      <!-- </b-col> -->
      <b-col class="signup-section">
        <p class="signup-text">¿No tienes una cuenta en Wobiz?</p>
        <button-component :comp-class="'signup'" :title="'Crea tu cuenta'" />
        <img class="signup-img" src="../assets/wobiz-background.png" alt="" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import InputComponent from '../components/InputComponent.vue';
import ButtonComponent from '../components/ButtonComponent.vue';
import LogoComponent from '../components/LogoComponent.vue';
import ErrorComponent from '../components/ErrorComponent.vue';

export default {
  name: 'Signin',
  components: {
    InputComponent,
    ButtonComponent,
    LogoComponent,
    ErrorComponent,
  },
  data() {
    return {
      mailMust: false,
      passwordMust: false,
    };
  },
  methods: {
    ...mapActions(['changeMail', 'changePassword', 'signIn']),
    mailUpdated(value) {
      this.changeMail(value);
    },
    passwordUpdated(value) {
      this.changePassword(value);
    },
    signInReady(data) {
      //eslint-disable-next-line
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      console.log(re.test(String(this.userEmail).toLowerCase()));
      if (
        re.test(String(this.userEmail).toLowerCase()) &&
        this.getUserPassword
      ) {
        if (this.getUserPassword.length >= 6) {
          this.signIn(this.userData);
          alert('Welcome!');
        } else this.passwordMust = data;
      } else if (re.test(String(this.userEmail).toLowerCase())) {
        if (!this.getUserPassword || this.getUserPassword.length >= 6) {
          this.passwordMust = data;
        } else {
          this.mailMust = data;
          this.passwordMust = data;
        }
      } else {
        this.mailMust = data;
      }
    },
  },
  computed: {
    ...mapGetters(['userEmail', 'userPassword', 'userData']),
    getUserEmail() {
      return this.userEmail;
    },
    getUserPassword() {
      return this.userPassword;
    },
  },
};
</script>

<style lang="css" scoped>
.signin {
  position: relative;
  float: left;
  height: calc(100vh - 3px);
  width: 30vw;
  background-color: #fff;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.15);
  padding-right: 20px;
  padding-left: 20px;
  z-index: 1;
}

legend {
  margin: 5px 15px;
  font-size: 13px;
  line-height: 1.5;
  font-weight: bold;
  font-family: Roboto, sans-serif;
}

.input-signin {
  margin: 5px 15px;
  cursor: text;
  height: 38px;
}

.signin-password {
  display: inline-grid;
}

.signin-password a {
  color: #969696;
}

#recover-password {
  margin: 5px 15px;
  font-size: 14px;
}

.signup-section {
  height: calc(100vh - 3px);
  background-repeat: no-repeat;
  position: relative;
  display: inherit;
  overflow: hidden;
}

.signup-text {
  position: absolute;
  top: 35px;
  right: 200px;
  font-size: 13px;
  font-family: Roboto, sans-serif;
}

.signup-img {
  max-width: -webkit-fill-available;
  height: 100%;
}

@media only screen and (max-width: 990px) {
  .signin {
    width: 50vw;
  }
}
@media only screen and (max-width: 770px) {
  .signin {
    width: 100vw;
  }
}
</style>
