"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ColorRectangle from "@/components/rectangle";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  variables: z.string(),
});
interface Color {
  name: string;
  value: string;
}
export default function Home() {
  const [colors, setColors] = useState<Color[]>([]);






  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  let output;
  function onSubmit(data: z.infer<typeof FormSchema>) {
    // console.log(JSON.stringify(data))
    const cssVariablesToArray = (cssString: string): string[] => {
      const cssArray: string[] = cssString
        .split(";")
        .map((item) => item.trim());
      const filteredArray: string[] = cssArray.filter(
        (item) => item.length > 0
      );
      return filteredArray;
    };

    const splitCssVariable = (cssVariable: string) => {
      const parts: string[] = cssVariable.split(":").map((item) => item.trim());
      if (parts.length === 2) {
        return {
          name: parts[0],
          value: parts[1],
        };
      }

      return null;
    };

    const addCommasToValues = (cssArray: any[]) => {
      cssArray.forEach((item) => {
        const parts = item.value.split(" ");
        const modifiedValue = parts.join(", ");
        item.value = modifiedValue;
      });

      return cssArray;
    };

    const convertCssArrayToObject = (cssArray: string[]): any[] => {
      const convertedArray: any[] = [];

      cssArray.forEach((item) => {
        const convertedItem = splitCssVariable(item);
        if (convertedItem !== null) {
          convertedArray.push(convertedItem);
        }
      });

      return convertedArray;
    };
    const cssString = JSON.stringify(data);
    const cssArray: string[] = cssVariablesToArray(cssString);
    const convertedArray: any[] = convertCssArrayToObject(cssArray);
    const modifiedArray: any[] = addCommasToValues(convertedArray);
    console.log(typeof(modifiedArray));
    setColors(modifiedArray);
  }
  return (
   <div className="w-screen  flex justify-center items-center h-screen p-3">
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-auto space-y-6">
        <FormField
          control={form.control}
          name="variables"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Variables</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="w-full"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Paste your css variable that you copied from shadcn themes
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    <ColorRectangle  colors={colors} />
   </div>
  );
}
