import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticaService } from '../autentica.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.css']
})
export class AutenticacaoComponent  implements OnInit {

  loginForm!: FormGroup;
  isLogin: boolean = true;
  isLoading = false;
  error: string = '';
  isError: boolean = false;
  public registerButtonText: string = 'Não tem uma conta? Registra-se';

  constructor(private formBuilder: FormBuilder, private router: Router, private autenticaService: AutenticaService, private snackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
  });
  }

  register() {
    this.isLoading = true;
    this.isLogin = false;
    const { email, password } = this.loginForm.value;
    this.autenticaService.signupUser(email, password).subscribe(
      responseData => {
        this.snackBar.open('Cadastro realizado com sucesso', 'Fechar', { duration: 3000 });
        this.isLoading = false;
        this.isLogin = true;
        this.isError = false;
        this.router.navigate(['/suinos']);
      },
      error => {
        //console.log(error);
        switch (error.error.error.message) {
          case 'EMAIL_EXISTS':
            this.error = 'O e-mail já está em uso.';
            this.snackBar.open(this.error, 'Fechar', { duration: 3000 });
            break;
          default:
            this.error = 'Ocorreu um erro ao cadastrar o usuário.'
            this.snackBar.open(this.error, 'Fechar', { duration: 3000 });
            break;

        }
        this.isError = true;
        this.error = 'Ocorreu um erro ao cadastrar o usuário.'
        this.isLoading = false;
      }
    );
  }

  redirectToRegister(): void {
    this.isLogin = !this.isLogin;
    this.registerButtonText = 'Voltar para login';
  }

  redirectToLogin(): void {
    this.isLogin = !this.isLogin;
    this.registerButtonText = 'Não tem uma conta? Registra-se';
  }

  login(): void {
    if (!this.loginForm.valid) {
      return;
    }
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    if (this.isLogin) {
      this.autenticaService.loginUser(email, password).subscribe(
        responseData => {
          this.isLoading = false;
          this.isError = false;
          this.router.navigate(['/home']);
        },
        error => {
          switch (error.error.error.message) {
            case 'INVALID_LOGIN_CREDENTIALS':
              this.error = 'Credenciais inválidas. Tente novamente ou cadastre um usuário.';
              this.snackBar.open(this.error, 'Fechar', { duration: 3000 });
              break;
            default:
              this.error = 'Ocorreu um erro ao cadastrar o usuário.'
              this.snackBar.open(this.error, 'Fechar', { duration: 3000 });
              break;
          }
        }
      );
    }
    this.loginForm.reset();
  }
}


