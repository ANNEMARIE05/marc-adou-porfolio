import { redirect } from "next/navigation";
import { profil } from "@/lib/contenu";

export default function Page() {
  redirect(profil.cv);
}
