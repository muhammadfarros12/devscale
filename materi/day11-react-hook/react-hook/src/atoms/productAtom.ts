import type { Product } from "@/types/product";
import { atom } from "jotai";

export const productAtoms = atom<Product[]>([])