import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import * as Joi from "joi";
import { SuperHero } from "../class/super-hero";
@Component({
  selector: "app-basic",
  templateUrl: "./basic.component.html",
  styleUrls: ["./basic.component.scss"],
})
export class BasicComponent {
  j = JSON;
  superHero: SuperHero = new SuperHero();
  name;
  superPowers;
  submitted = false;
  superHeroForm = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(4)]],
    place: [""],
    superPowers: ["", Validators.required],
  });
  get f() {
    return this.superHeroForm.controls;
  }
  getSuperPowers() {
    return this.superHeroForm.get("superPowers");
  }
  getName(): AbstractControl {
    return this.superHeroForm.get("name");
  }
  constructor(private fb: FormBuilder) {
    this.superPowers = this.getSuperPowers();
    this.name = this.getName();
  }
  superPowerList = ["Flying", "HeatBeam", "Time-banding", "rex"];
  changedSuperPower() {
    console.log(this.superPowers);
  }
  displayData() {
    this.superHeroForm.markAllAsTouched();

    this.onSubmit();
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.superHeroForm.invalid) {
      return;
    }
  }
}
