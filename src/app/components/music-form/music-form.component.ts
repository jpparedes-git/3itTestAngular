import { Component, OnInit } from '@angular/core';
import { Music } from 'src/app/models/music';
import { User } from 'src/app/models/user';
import { MusicServiceService } from 'src/app/services/music-service.service';
import { Form, FormGroup, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vote } from 'src/app/models/vote';
import { ResponseServiceService } from 'src/app/services/response-service.service';

@Component({
  selector: 'app-music-form',
  templateUrl: './music-form.component.html',
  styleUrls: ['./music-form.component.css']
})
export class MusicFormComponent implements OnInit {

  musics: Music[] = [];
  musicId : number = 0;

  public user : User;
  public music : Music;

  form: FormGroup = new FormGroup({
    email: new FormControl('')
  });

  constructor(private musicService: MusicServiceService,
    private userService: UserServiceService,
    private responseService : ResponseServiceService,
    private formBuilder: FormBuilder,
    private router: Router){
      this.user = new User("","");
  }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]]
      }
    );

    this.musicService.findAll().subscribe(data => {
      this.musics = data;
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(){
    if (this.form.invalid) {
      this.formError();
      return;
    }
    
    this.userService.saveUser(this.user,this.music.id).subscribe(result =>
       {
         if(result.id != null){    
          this.voteSuccess();
         }
         else{
            this.emailOnUse();
         }
       },
       (error : HttpErrorResponse) => this.errorAlert());
  }

  postResponse(){
    this.responseService.saveResponse(this.user.id, this.music.id);
  }

  gotoResulsts() {
    this.router.navigate(['/results']);
  }

  succesAlert() {
    Swal.fire('Gracias por votar');
  }

  errorAlert() {
    Swal.fire('ERROR EN EL SERVICIO');
  }

  formError() {
    Swal.fire('Rellene o verifique los campos');
  }

  emailOnUse() {
    Swal.fire({
      title: 'Correo ya registrado',
      text: 'Por favor revisar el texto ingresado',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ver votaciones',
      cancelButtonText: 'Editar correo',
    }).then((result) => {
      if (result.value) {
        this.gotoResulsts();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }

  voteSuccess() {
    Swal.fire({
      title: 'Gracias por votar',
      text: 'Echa un vistazo a los resultados',
      icon: 'success',
      confirmButtonText: 'Ver votaciones',
    }).then((result) => {
      if (result.value) {
        this.gotoResulsts();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        
      }
    });
  }
}
