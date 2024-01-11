import { isMobile } from "react-device-detect";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useState } from "react";

export default function CreateOrganization() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  if (isMobile) {
    return (
      <Drawer
        open={true}
        onOpenChange={() => {
          setDrawerOpen(true);
          if (drawerOpen) {
            navigate("/organizations");
          }
        }}
      >
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>
              Make changes to your profile here. Click save when you're done.
            </DrawerDescription>
          </DrawerHeader>
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              iure ipsam nemo et corrupti? Veritatis odit optio deleniti non,
              vero repudiandae doloribus eveniet quibusdam similique quam
              tempore consequatur repellat nihil libero a impedit eligendi vel
              voluptatem? Quos quas inventore deleniti cupiditate voluptate
              voluptas labore, amet, aliquam quae nemo qui unde! Nobis aliquam
              tempora voluptates omnis debitis hic aspernatur, sit iste at qui
              dolore iusto quibusdam tempore vero incidunt deserunt, officiis
              voluptatibus rerum! Praesentium aliquam reiciendis, optio voluptas
              excepturi numquam, ipsum debitis eum quae eveniet ducimus incidunt
              fugiat dolores minus delectus modi assumenda repellat consectetur!
              Placeat ab accusantium possimus nesciunt sunt sit minus! Nihil
              reprehenderit repellat voluptatum quaerat, error architecto
              repellendus illum provident quis obcaecati corrupti neque id
              laborum fugiat tenetur deleniti maiores labore. Quibusdam
              blanditiis aspernatur consequuntur quis nulla est voluptates
              aliquid ad a quos iste nisi quo vel ipsum similique ex quisquam
              unde ut, voluptatum exercitationem non obcaecati. Sunt, sint
              perspiciatis. Laborum et labore ex quam iste rem magnam
              accusantium ducimus aspernatur architecto, molestiae inventore
              illum aut laboriosam tempora! Provident odit quasi sint eaque amet
              et eius vero, ab temporibus omnis libero a molestias impedit.
              Recusandae, saepe fuga praesentium delectus laboriosam harum nemo
              quaerat alias sint nesciunt tempora assumenda id officiis maiores
              reprehenderit quis illo dicta quod maxime qui, ratione veritatis
              nulla ducimus. Cumque, molestias cupiditate autem repellat dolore
              officiis iste a tempora consequuntur praesentium. Autem eum
              possimus ad aliquam at corrupti cumque aliquid deserunt facere
              dolore molestias odio, beatae consectetur. Dolorem atque
              consequatur expedita exercitationem consectetur veritatis magnam,
              autem fuga nostrum temporibus soluta pariatur deleniti, molestiae
              quos culpa sed odio corporis excepturi et voluptatum error
              voluptate. Architecto dolorum illo ad rerum quam veritatis
              incidunt, maxime qui eum sapiente placeat nobis, aperiam ipsam
              quia sunt esse minus ipsum tenetur voluptates magni aliquid odio
              atque perferendis quod. Aut, aliquid maxime pariatur ea laboriosam
              quas, nemo porro perspiciatis consequuntur assumenda deserunt
              magnam error molestias tenetur optio repellendus neque, voluptate
              inventore asperiores repellat quod! Corporis saepe, dolore nemo
              tenetur, sunt placeat provident quia tempora explicabo ullam amet
              optio nulla incidunt ea eos, nesciunt aliquid odit cupiditate qui
              dolores non dolor atque. Repudiandae sapiente qui dicta eius
              laboriosam ut. Impedit hic ad, sed quidem ratione magni ab,
              repellendus porro obcaecati alias sequi unde excepturi vel
              molestiae a asperiores odit? Possimus praesentium repellat quis et
              molestiae, illo, velit neque vel nisi officia doloremque ratione
              eum cum voluptates esse fugit odit, aperiam dolores? Provident
              officia dolorum ipsam ipsa omnis quo nihil iste, recusandae,
              tempora optio corporis illum veritatis magni sed, et sit molestiae
              suscipit atque temporibus? Dignissimos suscipit a, modi dolorum,
              vitae fuga necessitatibus laudantium adipisci aperiam perferendis
              ducimus laborum nam, natus excepturi commodi. Officia laborum
              distinctio mollitia ipsam totam odio necessitatibus obcaecati
              laboriosam debitis architecto tempora, repellat quos suscipit quod
              similique consequuntur nostrum libero aperiam recusandae!
              Explicabo optio est et minus dolore nisi nam dicta excepturi rem
              odit nostrum sed impedit dolorem, eveniet distinctio esse sit
              sequi dolor eos recusandae. Distinctio laboriosam quae vitae,
              aspernatur eveniet, accusantium atque a voluptatibus fugiat libero
              amet odit harum illum animi commodi nostrum fugit enim asperiores
              quo! Assumenda, sint magnam voluptas sunt atque eius. Facilis
              aperiam id mollitia excepturi. Quos fugit quae natus facilis
              laborum cum expedita exercitationem, omnis delectus repellat
              possimus distinctio, nobis temporibus earum ad officia sunt
              numquam dolore molestias harum rem blanditiis cumque voluptatem
              aliquid? Magni quia nobis expedita molestiae eveniet! Temporibus
              hic magni nisi modi, doloremque eum. Beatae quod vitae debitis
              perspiciatis laborum, nihil eveniet facere reiciendis, illo magni
              explicabo, dicta nobis deserunt consequuntur rerum fugiat sed
              ducimus ratione maxime odio voluptas corporis officia quam!
              Debitis, nesciunt! Provident ut aperiam, consectetur sequi modi
              eos fugiat. Laborum eaque, maxime aliquam adipisci possimus quod
              aperiam mollitia assumenda repellat expedita saepe culpa animi
              nostrum voluptas reprehenderit fuga dolores sapiente dolorem quos
              illo quaerat nisi nihil praesentium! Excepturi officia dolore
              placeat debitis minima officiis velit cupiditate, necessitatibus
              ducimus temporibus vero odio expedita, qui, amet dolorem iste
              nostrum! Voluptatum doloribus consequatur laborum quo impedit
              dolorum laboriosam. Optio numquam provident quisquam ipsa. Sunt
              dolor commodi eligendi facilis voluptatum laborum repellendus
              dicta quo iste ipsum. Perferendis debitis sunt, ipsa expedita
              dignissimos dolorum id veritatis optio aliquid vel hic at,
              repellat quis ab ratione totam nihil necessitatibus omnis tenetur
              dolorem provident eligendi aspernatur placeat molestiae! Vero,
              tempora natus. Unde, nam obcaecati accusantium, vel placeat alias
              laborum quia sed et cum dolorem eos neque laboriosam laudantium
              est eaque non praesentium nostrum exercitationem! Atque inventore
              odio dolore aliquam provident voluptate repellat omnis minima
              consequuntur dignissimos earum, possimus reiciendis temporibus
              nemo? Fugit quis necessitatibus maxime quas voluptas et recusandae
              alias asperiores voluptates, voluptatibus, possimus distinctio,
              molestias accusamus aliquid nam non ipsum numquam incidunt unde
              sed saepe laudantium magni itaque? Debitis autem illo ad
              dignissimos consequatur numquam facilis fuga ipsam nobis
              laboriosam sit tempora similique, a nisi, quas soluta sunt ea ab
              minima recusandae qui laborum. Repellat a sit nulla sequi neque
              reprehenderit commodi impedit adipisci doloribus eveniet rem, fuga
              cum. Laudantium quo dolorem libero quaerat itaque, aspernatur
              similique quos provident est excepturi accusantium doloribus eum
              consequuntur officiis iure quam dolore quibusdam beatae incidunt!
              Rerum quibusdam culpa fuga nihil, soluta odio eligendi harum
              mollitia porro earum pariatur assumenda voluptatem expedita
              numquam deserunt qui esse ab quas doloremque odit aut quaerat
              quisquam eum. Ipsum incidunt accusamus eum cupiditate, at,
              deleniti nam, provident facilis corporis magnam reiciendis ipsa
              maxime labore quibusdam repudiandae quod possimus consequuntur
              quam sequi modi animi nostrum ut eligendi! Nihil quasi, possimus
              earum aliquam facilis velit culpa aut illum recusandae dolor
              voluptates accusamus perspiciatis praesentium amet atque
              laudantium. Expedita corrupti ducimus labore? Cum, consequuntur
              doloribus sequi vero at corrupti corporis sunt nobis asperiores
              assumenda. Iste corporis, maiores cum hic eius eligendi sequi
              error, aspernatur dolores minus libero provident? Sed, officia in.
              Aspernatur voluptatibus soluta, veniam consequatur iure amet illo
              commodi asperiores explicabo saepe magnam, quas consectetur odit
              ratione ex vero consequuntur dolore ducimus omnis nam officia nisi
              sapiente. Quo eaque quae dolores dolor repellendus voluptas
              commodi excepturi, natus et labore sint tempore voluptatibus culpa
              explicabo, ipsum libero perferendis ducimus impedit nobis.
              Adipisci nisi perspiciatis aliquid.
            </p>
          </div>
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={true} onOpenChange={() => navigate("/organizations")}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
