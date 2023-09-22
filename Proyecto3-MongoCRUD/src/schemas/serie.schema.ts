import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Serie {
  @Prop({ unique: true, required: true, trim: true })
  title: string;
  @Prop({ unique: true, required: true, trim: true })
  description: string;
  @Prop({ unique: true, required: true })
  episodes: number;
  @Prop({ required: true, default: false })
  finished: boolean;
}

export const SerieSchema = SchemaFactory.createForClass(Serie);
