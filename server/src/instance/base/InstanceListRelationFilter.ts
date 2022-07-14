/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InstanceWhereInput } from "./InstanceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class InstanceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => InstanceWhereInput,
  })
  @ValidateNested()
  @Type(() => InstanceWhereInput)
  @IsOptional()
  @Field(() => InstanceWhereInput, {
    nullable: true,
  })
  every?: InstanceWhereInput;

  @ApiProperty({
    required: false,
    type: () => InstanceWhereInput,
  })
  @ValidateNested()
  @Type(() => InstanceWhereInput)
  @IsOptional()
  @Field(() => InstanceWhereInput, {
    nullable: true,
  })
  some?: InstanceWhereInput;

  @ApiProperty({
    required: false,
    type: () => InstanceWhereInput,
  })
  @ValidateNested()
  @Type(() => InstanceWhereInput)
  @IsOptional()
  @Field(() => InstanceWhereInput, {
    nullable: true,
  })
  none?: InstanceWhereInput;
}
export { InstanceListRelationFilter };
