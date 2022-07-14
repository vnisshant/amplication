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
import { HostWhereInput } from "./HostWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class HostListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => HostWhereInput,
  })
  @ValidateNested()
  @Type(() => HostWhereInput)
  @IsOptional()
  @Field(() => HostWhereInput, {
    nullable: true,
  })
  every?: HostWhereInput;

  @ApiProperty({
    required: false,
    type: () => HostWhereInput,
  })
  @ValidateNested()
  @Type(() => HostWhereInput)
  @IsOptional()
  @Field(() => HostWhereInput, {
    nullable: true,
  })
  some?: HostWhereInput;

  @ApiProperty({
    required: false,
    type: () => HostWhereInput,
  })
  @ValidateNested()
  @Type(() => HostWhereInput)
  @IsOptional()
  @Field(() => HostWhereInput, {
    nullable: true,
  })
  none?: HostWhereInput;
}
export { HostListRelationFilter };
