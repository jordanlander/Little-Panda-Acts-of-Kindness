// Single source of truth for every doll on the site.
// Marking a doll `sold: true` removes it from the homepage Available Now
// section AND the Shop main grid AND surfaces it in the Recently Adopted strip.

import ellieImg from "@/assets/dolls/ellie.jpg";
import bertImg from "@/assets/dolls/bert.jpg";
import edithImg from "@/assets/dolls/edith.jpg";
import eddieImg from "@/assets/dolls/eddie.jpg";
import gingerImg from "@/assets/dolls/ginger.jpg";
import steveImg from "@/assets/dolls/steve.jpg";
import earlImg from "@/assets/dolls/earl.jpg";
import hughImg from "@/assets/dolls/hugh.jpg";
import scottImg from "@/assets/dolls/scott.jpg";
import charlieImg from "@/assets/dolls/charlie.jpg";
import agnesImg from "@/assets/dolls/agnes.jpg";
import janeImg from "@/assets/dolls/jane.jpg";
import timImg from "@/assets/dolls/tim.jpg";
import leeImg from "@/assets/dolls/lee.jpg";
import peggyImg from "@/assets/dolls/peggy.jpg";
import jamesImg from "@/assets/dolls/james.jpg";
import uliImg from "@/assets/dolls/uli.jpg";
import sueImg from "@/assets/dolls/sue.jpg";
import darrellImg from "@/assets/dolls/darrell.jpg";
import otisImg from "@/assets/dolls/otis.jpg";
import henryImg from "@/assets/dolls/henry.jpg";
import stanImg from "@/assets/dolls/stan.jpg";
import maryImg from "@/assets/dolls/mary.jpg";
import bailyImg from "@/assets/dolls/baily.jpg";
import trevorImg from "@/assets/dolls/trevor.jpg";
import kimImg from "@/assets/dolls/kim.jpg";
import annImg from "@/assets/dolls/ann.jpg";
import howardImg from "@/assets/dolls/howard.jpg";
import willowImg from "@/assets/dolls/spirit/willow.jpg";
import ravenImg from "@/assets/dolls/spirit/raven.jpg";
import lunaImg from "@/assets/dolls/spirit/luna.jpg";
import mossImg from "@/assets/dolls/spirit/moss.jpg";
import emberImg from "@/assets/dolls/spirit/ember.jpg";
import astraImg from "@/assets/dolls/spirit/astra.jpg";
import solsticeImg from "@/assets/dolls/spirit/solstice.jpg";
import brambleImg from "@/assets/dolls/spirit/bramble.jpg";
import rootboundImg from "@/assets/dolls/spirit/rootbound.jpg";
import thistlewingImg from "@/assets/dolls/spirit/thistlewing.jpg";
import breathkeeperImg from "@/assets/dolls/spirit/breathkeeper.jpg";
import mendedImg from "@/assets/dolls/spirit/mended.jpg";
import reachImg from "@/assets/dolls/spirit/reach.jpg";
import keeperImg from "@/assets/dolls/spirit/keeper.jpg";
import stitchwiseImg from "@/assets/dolls/spirit/stitchwise.jpg";
import hearthImg from "@/assets/dolls/spirit/hearth.jpg";
import aurielleImg from "@/assets/dolls/spirit/aurielle.jpg";
import mirelleImg from "@/assets/dolls/spirit/mirelle.jpg";
import rowenaImg from "@/assets/dolls/spirit/rowena.jpg";
import lenoraImg from "@/assets/dolls/spirit/lenora.jpg";
import pocketSpiritsImg from "@/assets/dolls/spirit/pocket-spirits.jpg";
import pocketSpiritsTwoImg from "@/assets/dolls/spirit/pocket-spirits-two.jpg";

export type DollCollection = "random" | "love" | "spirit";

export type Doll = {
  name: string;
  image: string;
  story?: string;
  etsyUrl?: string;
  sold?: boolean;
  collection: DollCollection;
  price?: string;
};

export const collectionLabels: Record<DollCollection, string> = {
  random: "Random Acts of Love",
  love: "Love Happens",
  spirit: "Spirit Dolls",
};

export const allDolls: Doll[] = [
  { name: "Ellie", image: ellieImg, story: "Soft and snuggly, Ellie loves afternoon naps and warm hugs.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4407618752/ellie-handmade-art-doll-from-recycled", collection: "random", price: "$44", sold: true },
  { name: "Bert", image: bertImg, story: "Bert is curious and kind, always ready for a new adventure.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4424748861/bert-handmade-one-of-a-kind-art-doll", collection: "random", price: "$44" },
  { name: "Edith", image: edithImg, story: "Gentle Edith enjoys quiet moments and bedtime stories.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4424759918/edith-random-acts-of-love-collection", collection: "random", price: "$44" },
  { name: "Eddie", image: eddieImg, story: "Eddie is playful and spirited, bringing joy wherever he goes.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4424752593/eddie-random-acts-of-love-collection", collection: "random", price: "$44" },
  { name: "Ginger", image: gingerImg, story: "Ginger is sweet and thoughtful, a loyal companion through and through.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4407640841/ginger-hand-stitched-art-plush-from", collection: "random", price: "$44" },
  { name: "Steve", image: steveImg, story: "Steve loves comfort and calm, perfect for cozy evenings.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4424762336/steve-random-acts-of-love-collection", collection: "random", price: "$44" },
  { name: "Earl", image: earlImg, story: "Earl is wise and warm-hearted, a true friend to all.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4424750889/earl-handmade-one-of-a-kind-art-doll", collection: "random", price: "$44", sold: true },
  { name: "Hugh", image: hughImg, story: "Hugh is gentle and caring, always ready to listen.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4424761252/hugh-random-acts-of-love-collection", collection: "random", price: "$44" },
  { name: "Scott", image: scottImg, story: "Scott is cheerful and bright, bringing smiles to every day.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4407648465/scott-hand-stitched-soft-sculpture-from", collection: "random", price: "$44", sold: true },
  { name: "Charlie", image: charlieImg, story: "An artsy soul with a bold personality and unique flair.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4412102380/charlie-handmade-primitive-folk-art-soft", collection: "love", price: "$44", sold: true },
  { name: "Agnes", image: agnesImg, story: "Agnes is creative and expressive, a true work of art.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4427367211/agnes-love-happens-collection-upcycled", collection: "love", price: "$44" },
  { name: "Jane", image: janeImg, story: "Jane is elegant and sophisticated, made for display.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4428379150/jane-love-happens-collection-upcycled", collection: "love", price: "$44", sold: true },
  { name: "Tim", image: timImg, story: "Tim is quirky and charming, full of character.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4428382225/tim-love-happens-collection-upcycled", collection: "love", price: "$44", sold: true },
  { name: "Lee", image: leeImg, story: "Lee is modern and stylish, a statement piece.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4428384226/lee-love-happens-collection-upcycled", collection: "love", price: "$44", sold: true },
  { name: "Peggy", image: peggyImg, story: "Peggy is vintage-inspired and whimsical.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4428384226/peggy-love-happens-collection-upcycled", collection: "love", price: "$44", sold: true },
  { name: "James", image: jamesImg, story: "James is distinguished and refined.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4428371063/james-love-happens-collection-upcycled", collection: "love", price: "$44" },
  { name: "Uli", image: uliImg, story: "Uli is artistic and unconventional.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4428387303/uli-love-happens-collection-upcycled", collection: "love", price: "$44" },
  { name: "Sue", image: sueImg, story: "Sue is graceful and poised.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4428384226/sue-love-happens-collection-upcycled", collection: "love", price: "$44", sold: true },
  { name: "Darrell", image: darrellImg, story: "Darrell is bold and confident.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4427377183/darrell-love-happens-collection-upcycled", collection: "love", price: "$44" },
  { name: "Otis", image: otisImg, story: "Otis is fun-loving and spirited.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4427377183/otis-love-happens-collection-upcycled", collection: "love", price: "$44", sold: true },
  { name: "Henry", image: henryImg, story: "Henry is classic and timeless.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4427383960/henry-love-happens-collection-upcycled", collection: "love", price: "$44", sold: true },
  { name: "Stan", image: stanImg, story: "Stan is unique and memorable.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4427383960/stan-love-happens-collection-upcycled", collection: "love", price: "$44", sold: true },
  { name: "Mary", image: maryImg, story: "Mary is sweet and endearing.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4428380157/mary-love-happens-collection-upcycled", collection: "love", price: "$44", sold: true },
  { name: "Baily", image: bailyImg, story: "Baily is playful and expressive.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4427376346/baily-love-happens-collection-upcycled", collection: "love", price: "$44", sold: true },
  { name: "Trevor", image: trevorImg, story: "Trevor is adventurous and free-spirited.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4428383735/trevor-love-happens-collection-upcycled", collection: "love", price: "$44", sold: true },
  { name: "Kim", image: kimImg, story: "Kim is stylish and contemporary.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4428376585/kim-love-happens-collection-upcycled", collection: "love", price: "$44", sold: true },
  { name: "Ann", image: annImg, story: "Ann is gentle and artistic.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4427370193/ann-love-happens-collection-upcycled", collection: "love", price: "$44" },
  { name: "Howard", image: howardImg, story: "Howard is distinguished and one-of-a-kind.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4427386042/howard-love-happens-collection-upcycled", collection: "love", price: "$44" },
  { name: "Willow", image: willowImg, story: "A guardian of tender moments, wrapped in lace and light.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4415531725/willow-spirit-doll-handmade-folk-art", collection: "spirit", price: "$65", sold: true },
  { name: "Raven", image: ravenImg, story: "Keeper of ancient wisdom and midnight magic.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4424486931/raven-spirit-doll-collection-handmade", collection: "spirit", price: "$65", sold: true },
  { name: "Luna", image: lunaImg, story: "She holds space between shadow and moonlight, a companion for quiet strength.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4424483731/luna-spirit-doll-collection-handmade", collection: "spirit", price: "$65", sold: true },
  { name: "Moss", image: mossImg, story: "Born from earth's whispers, she carries the healing power of wild places.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4424493852/moss-spirit-doll-collection-handmade", collection: "spirit", price: "$65", sold: true },
  { name: "Ember", image: emberImg, story: "A talisman of warmth, holding the sacred flame of resilience.", etsyUrl: "https://little-panda-acts-of-kindness.square.site/product/ember-spirit-doll-collection-/4AG6KK7OF4KGKN5VDPJU6Q45", collection: "spirit", price: "$65", sold: true },
  { name: "Astra", image: astraImg, story: "Woven with stardust and memory, a guide through life's deepest passages.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4424479727/astra-spirit-doll-collection-handmade", collection: "spirit", price: "$65" },
  { name: "Solstice", image: solsticeImg, story: "She marks the turning of seasons, a reminder that light returns.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4424492833/solstice-spirit-doll-collection-handmade", collection: "spirit", price: "$65", sold: true },
  { name: "Bramble", image: brambleImg, story: "Wild and unbound, she teaches us to embrace our beautiful imperfections.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4424495423/bramble-spirit-doll-collection-handmade", collection: "spirit", price: "$65" },
  { name: "Rootbound", image: rootboundImg, story: "A quiet talisman of earth and breath, grounding you in the present moment.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4432872532", collection: "spirit", price: "$65", sold: true },
  { name: "Thistlewing", image: thistlewingImg, story: "A charm of air and becoming, she carries the lightness of transformation.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4432889516", collection: "spirit", price: "$65" },
  { name: "Breathkeeper", image: breathkeeperImg, story: "A charm of fire, air and staying alive—she holds the sacred rhythm of breath.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4433452248", collection: "spirit", price: "$65" },
  { name: "Mended", image: mendedImg, story: "A charm of memory and repair—she honors the beauty in what's been broken and restored.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4433454310", collection: "spirit", price: "$65", sold: true },
  { name: "Reach", image: reachImg, story: "A charm of growth and claiming space—she encourages you to stretch toward the light.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4433456764", collection: "spirit", price: "$65", sold: true },
  { name: "Keeper", image: keeperImg, story: "A charm of endurance and care—she guards the tender work of showing up, again and again.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4434065695", collection: "spirit", price: "$65" },
  { name: "Stitchwise", image: stitchwiseImg, story: "A charm of attention and continuance—she honors the quiet wisdom found in mending.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4434069507", collection: "spirit", price: "$65" },
  { name: "Hearth", image: hearthImg, story: "A talisman of home and holding—she embodies the warmth and comfort of belonging.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4436987330/hearth-folk-art-spirit-doll-a-talisman", collection: "spirit", price: "$65", sold: true },
  { name: "Aurielle", image: aurielleImg, story: "A guardian of becoming, marked by the spiral—she guides you through transformation and growth.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4439438758", collection: "spirit", price: "$65" },
  { name: "Mirelle", image: mirelleImg, story: "A charm of courage and authenticity—she whispers the quiet power of being unapologetically you.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4455298625/mirelle-folk-art-spirit-doll-be-you", collection: "spirit", price: "$65" },
  { name: "Rowena", image: rowenaImg, story: "A charm of resilience and strength—she carries the fierce grace of standing tall through every storm.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4455311638/rowena-folk-art-spirit-doll-strong", collection: "spirit", price: "$65" },
  { name: "Lenora", image: lenoraImg, story: "A talisman of grace and quiet knowing—she holds the wisdom that comes from walking your own path.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4455307089/lenora-folk-art-spirit-doll-talisman-of", collection: "spirit", price: "$65", sold: true },
  { name: "Pocket Spirit Dolls", image: pocketSpiritsImg, story: "Tiny talismans of intention — each ~2 inch handmade folk art doll comes with a fabric pouch, chakra worry stone, and handwritten inspirational message. Choose your one-of-a-kind spirit (A–F) on Etsy.", etsyUrl: "https://littlepandaacts.etsy.com/listing/4470017968/pocket-spirit-dolls-handmade-folk-art", collection: "spirit", price: "$35.70" },
];

export const ETSY_SHOP_URL = "https://littlepandaacts.etsy.com";
