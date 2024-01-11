import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { TokenService } from './token-config.service';

@Component({
  selector: 'app-token-config',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './token-config.component.html',
  styleUrl: './token-config.component.css'
})
export class TokenComponent implements OnInit {

  form: FormGroup;
  private tokenService = inject(TokenService)
  private formBuilder = inject(FormBuilder)

  constructor()
  {
    this.formBuilder = this.formBuilder;
    this.form = this.formBuilder.group({
      emojiApertura: ['', Validators.required],
      emojiCierre: ['', Validators.required],
      fraseBienvenida: ['', Validators.required],
      fraseDespedida: ['', Validators.required],
      cuerpoMensaje: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  async submit() {
    if (this.form.valid) {
      const data = {
        emoji_apertura: [this.form.value.emojiApertura],
        emoji_cierre: [this.form.value.emojiCierre],
        frase_bienvenida: [this.form.value.fraseBienvenida],
        frase_despedida: [this.form.value.fraseDespedida],
        cuerpo_mensaje: [this.form.value.cuerpoMensaje]
      };

      // Envío de los datos al servidor
      const result = this.tokenService.sendData(data);

      // Maneja la respuesta del servidor aquí (por ejemplo, mostrando un mensaje de éxito o error)
    }
  }
}
