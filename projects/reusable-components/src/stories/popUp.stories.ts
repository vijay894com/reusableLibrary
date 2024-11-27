import { Meta, StoryObj } from "@storybook/angular";
import { popUpComponent } from "./popUp.component";

const meta:Meta<popUpComponent>={
    component:popUpComponent
}

export default meta;
type Story=StoryObj<popUpComponent>;

export const popUp:Story={
name:'I am Pop Up'
}