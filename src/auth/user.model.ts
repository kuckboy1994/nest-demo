import { prop, modelOptions } from '@typegoose/typegoose';
import { hashSync } from 'bcryptjs';

// https://mongoosejs.com/docs/guide.html#options
// timestamps 会自动加入 createdAt 和 updatedAt
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  @prop()
  username: string;

  @prop({
    select: false,
    get(value) {
      return value;
    },
    set(value) {
      return value ? hashSync(value) : value;
    },
  })
  password: string;
}
