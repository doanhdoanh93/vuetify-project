<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuthenticationStore } from "@/store/authentication/authentication";
import { reactive } from "vue";
import {
  LoginAcountsApi,
  LoginAcountsApiAxiosParamCreator,
} from "@/generated-api-client/api/login-acounts-api";
import { SignInModel } from "@/generated-api-client/models/sign-in-model";

import * as yup from "yup";
import { ruleForSchema, yupSchemas } from "@/shared/helpers/yup-helper";

const authStore = useAuthenticationStore();
const router = useRouter();

const state = reactive({
  signIn: {
    email: "",
    password: "",
  } as SignInModel,
});

const loginFormSchema = yup.object().shape({
  // schema
  email: yup.string().required().label("ユーザーID"),
  // email: yupSchemas.password,
  password: yupSchemas.password,
});

const goHome = () => {
  authStore.signInAsync();
  router.replace({ path: "/" });
  return;
};

const submit = async () => {
  await LoginAcountsApiAxiosParamCreator()
    .apiLoginAcountsSignInPost(state.signIn)
    .then((rs) => {
      console.log("rs: ", rs, state.signIn);
    });
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-center">
        <h1 class="text-h5 font-weight-bold">Login</h1>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="6">
        <v-text-field
          v-model="state.signIn.email"
          type="email"
          label="Email"
          variant="outlined"
          density="compact"
          :rules="[ruleForSchema(loginFormSchema, 'email', state.signIn)]"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="6">
        <v-text-field
          v-model="state.signIn.password"
          type="password"
          label="Password"
          variant="outlined"
          density="compact"
          :rules="[ruleForSchema(loginFormSchema, 'password', state.signIn)]"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center">
      <v-col cols="2">
        <v-btn
          color="primary"
          variant="outlined"
          density="compact"
          @click="submit"
          >Submit</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>
