/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HostWhereInput } from "./HostWhereInput";
import { Type } from "class-transformer";
import { HostOrderByInput } from "./HostOrderByInput";

@ArgsType()
class HostFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HostWhereInput,
  })
  @Field(() => HostWhereInput, { nullable: true })
  @Type(() => HostWhereInput)
  where?: HostWhereInput;

  @ApiProperty({
    required: false,
    type: [HostOrderByInput],
  })
  @Field(() => [HostOrderByInput], { nullable: true })
  @Type(() => HostOrderByInput)
  orderBy?: Array<HostOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { HostFindManyArgs };
