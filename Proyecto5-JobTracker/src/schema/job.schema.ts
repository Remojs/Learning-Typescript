import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Job {
  @Prop({ required: true, trim: true })
  date: Date;
  @Prop({ required: true, trim: true })
  jobTitle: string;
  @Prop({ required: true, trim: true })
  company: string;
  @Prop({ required: true, trim: true })
  mainStack: string;
  @Prop({ required: true, trim: true })
  platform: string;
  @Prop({ required: true, trim: true })
  link: string;
  @Prop({ required: false, default: 'none' })
  recruiter: string;
}

export const JobSchema = SchemaFactory.createForClass(Job);
