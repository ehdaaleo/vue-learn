<script setup>
import { computed, ref } from 'vue'


const mainProduct = ref({
  id: 1,
  name: "Cozy Sneakers",
  description: "High-quality sneakers that go with everything you wear. These premium sneakers combine comfort with style, featuring breathable materials and cushioned soles for all-day wear.",
  image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIWFRUVFRUVFhUVFRYVFxUWFRUXFxcVFRgYHSggGBolHRUVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OFRAQFy0dHR0tLS0tKy0tLS0rLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLv/AABEIAOAA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwEEBQAGB//EAD0QAAEDAgQDBAkDAwQBBQAAAAEAAhEDIQQSMUFRYXEFgZGhEyJCUrHB0eHwBhQyYnLxFSMzkoIWU2PC0v/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACURAQEBAQABBAIBBQEAAAAAAAABEQIDEiExUSJBMiNCYXGBBf/aAAwDAQACEQMRAD8A9EApLVLQmhqeBXyqQE/IuLUYCCUMpj2oIU0GMCMhCwpiYBC7KjXIDPxTLqs3DZnBo3MfdXcZqndl0rl/Cw6n7fFcHc/OvT8d/pxcfDRlGgAA6BVKzk3EOVGvUQeF1iqFd6bVqqlVckatWqKlWfdWK71SrOTIiq9VXy4hrQSSYA3JOymtVXq/0x2L6MelqD/ccLA+wD8z5eK0451l5O5zFnsLsgUGXvUd/I//AFHILThGQhldMmOG226jKoIRSgLkwghQQuLkDigIcEuVJchSNMrlEKUaMa7Wo10qCtEClQVEqCgguSnhPhA4KaqFNKexyruRU3KTWCglTnQZk9InGbLQpsyMDd4k9Tr9EmhSzOBOjb9+yLFVFx+T+Veh4b+EVq71QrOViq6VTqhQ1VKzlVquViqYWfXqpjCa1SFm4iqnYiqh7KwJr1Qz2Rd54Dh1OifM1HXWTWl+l+ycx9PUFh/AHcj2j0259F6/Ml06QAAAgAQANgNlJXVzMji6vquuc9LLlJXQmnAly4KcqhATCBwRyhKDKIXI0JSCFK5cgNkoZQkICSttZYaXIS9JLlICnTwZeluqIwxcaaVp4SbomtRhiJI0QuDUUp+FZ7R0HmdkrchznbhoGRsbm5VKtdOrVrpOq47duu+T0zIqVGqlVqRKt4ysBosqtVSWRi60rKrvVvEOWZiXpikVXbC5NgPgvbdhdmijTDfaN3nnw6DRYX6U7PzvNV2jLN/u49w+IXrlv45+3J5etuOJQFFCghaMQwohSulAQUJRLiEACElSVBSBZKiVJCAlMDXIM6hIPTGmEmrTVpA9q2ZM14hQ16biQqjSpUs50QelhqhzUjOmUJahYVp9mYA1TrDRqfkOam9STabNaCTAVmq7KMo7+Z3Vqqym17gyZaS25mLAyPFVWUpKx8t/UdXh4z8qW2mq+OqZRG60apDWknwXn6pL3SVljafarUkqtWstJ9Kyo4oJKZWIcszFOV/GOiVlOvdOFXsP0kf9nvK2yFhfpERSPVbxXTz8OLv5oCVKgrlSAwhJTCkuKMGiUEoc6W5xRhaJyGUt8pRBRg017uaW54UBh4KDSKBoc4XIvQqU8GvXALiEQCglas1DFBUHWWniVQqsUVUNoulMLUjCFaWFwpqODR3ngOKRq+GwjqjsrB14AcSvShgpBrG7anjNyUVNjaYhotudzzPFIxrvVc7g0rxP/S78nXm8fhzJ1Z7/AOvk481gq2epWP8A8nwa0HzC0acBYnYX/Hm3eS8/+Rn5qx2hjso5lela7pz+jcfXzaaBZbyBuqNbHG/1VF+IJNipXmNh1YLPxtSxTWN9WSk4js97rkhvWZ8Nu9KS1N6nPy89jqs2UCl/FvRXf9IJeBOck2aBEnbUoe0MK+m4Zmx5g94T9NiZ3Otxs9jOh4YLB1l6fEdnVGCdRyXkcICQHAFe0wOJcabcxudl1eOSuHrdZpaVAC231Q27myEsuov2ylX6S1kSgcFcxeEy3BkcVVSwaFgClzQgJRSgguCEBMQ1LIMJal5UbTKkpGUuUwuTD0ZrhV6mJQsolF+1T90q76koSVcOFEKaWF5JYNU8NQcXQASTsF6zCYcUmR7Ru48+HQKMHQFIf1bn5Ka70Qy31FWqVvZiePCD80T3KriTBn8/PqsPP4OfL6b1/bdh8/LIbRNImmfZ/jzb7JHcqeNAIXo3NZVGV+2hFiOn0KqVewj7L2kf1Ag+UhTed+HZx5ZPl42thD4puHwcL1DuxH8Wf9vsib2G732d2Y/AJei/S75efthUaV77X79B5me5N9AXG+i3KfYjgbOaZ2h30Th2M4D1i1vUyteOLnw5PN3L08ZiKmSo13uuB8DoFvuwYfLXtBEmO42PIp2G/T7fSh/pG1AJJaW+G6Z2rims/g0ZiY6HWV0c8ZPdlrHxNYMd6OA0AwrzKwJDWmTGvBYOPxBNQl1yYPkn4LE5TI3USyVVlelp4gOBadrFVMRSynlsquArQYOp3W9hcrm+tHC6v+SGZScS1w2CpytXHAiWtbDeI3WPVaVNMcLlDDZQXBIOchJUZkJqIDjZcCuaZQPYUAyAuSchUID0rHJpCUizq0pVzAETJ1AsqLiuFQth3DXop6+Dny069b792hS2Yibfh5hVKtbcJJO48B8R9Fh6saYvPcl1G5gk0cRNjr5HonStZZUZjLc4tJRDGEKxXbfr8lWfSCw6mVvzdif9R5q3h8bmGtws84calBkEyLdNlXHq+S6krbx2PNGm0M/5KgnN7rdo5rJGDdVBc92YGQczp5EQNE91dj2tbUJa5ggOgGRwIsnYV4EikS9w3IytbO8XJPBdHNnTGzBhwoMvGaNGiMrRtHPXwXkatVzqrajiYLiINhJtI5X8lu9rVA20lznmCeMXceQmB3LNrNa93oQRmg9WuABHfv0IVde/sOfZR7QgPB4hKDZSMTXJeMx0G3HdE/FhvVc3c3r2bc/C9ReWwtCviodE2MFYuHxk6rQxDwWsPcqlvOwrJWphcf8A1W5rRqmjUbGjuIXm6QBTqTQN4TnkR6GsexSdHKD2GeKVR7SyCAZ5lMHbB4peoYRV7HeN1Rq0S0wQtCp2oeKqVMVnN0eosVipa9A+ql7SrSfmXKvdcg9eoMKGKMqMBWlzlMoCocUAiscmgls6D2fqEPpOfQ8funxKq1aMGW6HVux5jgVj34/3GnPX2PN+fMcCrFHExY35/VUG1PDnYj+4fNcH28llLi7NXcS/+I3knuA+4XBIoO43Hm36hTUPhseKuflRPaJfdJ1MDQG55j2QpqVCTlbrufdH1KaxkCAICrrr9Q5CK9NOwVbKHOdMNHi42b149yCq5LrvEMY3Qes7m4/ICB4qefxvuXXvBii0gVXmCRAEgZRsOu6oV67KVMuaBLzEjWCYJnUmLz9VrUMMwgk7Qdh3knok0azM4a24AkkC3IZjqSeC6efdi8HXwz6T3N3BI+ir5Xk3XsO16IrU6roGZj4Y63rWbmE7iTHcvL0aaw7t5rXm6tYUEDRaLKnqRvKoU6kJrahKy9X2qrjKyYa6qNqngiFQngjSPDymXSA/mofWA1KNB7qgCqYzEkC1lRxvbVNntSeAXm8f2rVreqwFreKc2la91RqgtCMDZed7EdUa0Bxla7q7Rq8eK2lZ4uLlQ/e0/fXI0Y9wXIA5CXQoDJutEjaSUVR+yEmLImjigAaFBK5oM8AjcEBWr0Q64s7iPgeIVMiLRB8j0PyWkWWSzSBsdFn1xKqdYptemMftqNxw5hLrUsupke9uP7uI5qPwc+iwsvNayym5o00NwRv90YZ+FJDDxN9QLTzHAptPCt1PrcC6T8d1pPJ7fB4VWc3QGel/gn0qXq5iInirNGkCeST2rWtlaLmwCXXXqOTFE4kEln5H58UVLDhzS7PGoIBAMcydFFDAwJ31niforNCjTcf9xoJEWgdbStOL9seg1OzgGNY2zcwe68yYENHg3zXybt/EYiliKrGn1M5yWIGU6ROoGncvr+OqZ3ZGyGgXN9PdBOpPFUnYCnUBD2NczaRvxbw7lXksLmV8kpdsYkbAq9R7bxG7AvS9q/pctl2H9aL5DrH9J3715utRqAlrhlI1BBBHcsbP8L/6aO3a3uBF/rlX3QqzcNOrlboYFnDxU5DIq9s1naEDpdVz6V+pefJego4Jo9kLmeqSCqkJi0OzH+53laFDs5+5A6BadTF02gSb8N0v96fZoud1sFWEU3Agfyefgn4fDNP8WA8yhw+Hc71qo3/iPmVpNrtAEcYiPiqhK37Q+6zwXK5nby8VyMLXqMwKMuMWCqioeCJtZwV7E4tkckBcdFUqYo7uASa3aTBq/TgjYMaDzbihpm91jv7VE+q1xPQqf3dQ2aw96WnjWLhKj0oWS44g2gBQcDWN3VPBG0Y0X1o6qnUrgXkRu3/88CpZ2WNXPJ70Q7OYJltuKV535OXDqFVpEgyPhyKssePtx+6ynUCw+qYnbY9U1mIBsbHh9OKw65vLSXWpTq2t4k/JJkTJjuH4VVLzrPXeeoUtrt39Xnq37IlO60ad0jEUibDf5QubVta45XQ/urq0jbhbQXFw4fInUoXgkw2w8PzVHSqTeU3D7p4NwunQgzKrdpdl06zSHt/td7Q6fRXn1Up9YBOTCt1857R7OdReaZvuDsRseSXTcdIXoP1QZh+keqOc38o81isYNiT1RhafTq25p0NdNrwq0HdWKHFLDV8PRax05QSb8Z6LYpgGCDrcKhXZIt/gqcBX2J1PgfunCafo5QOp/BTn4+K6d549JQC/2jVyPNyUIGNFrKziBmdfg0D4pv8ApZNnPd4x8Ffggl2aQI0B46J+aYMyeEWA5rTEayW9jsF3XHG5TqeDpATAdOloWg8XB2gjhKRnF8uhju8kZBqKbGtEhgJ81JqNN45ABBUceYM72+6rvcQc0TeLac0wsggNOaw4zP8AhS2qYEAEEKi4tcIGpOklszpYJZqVBYR6tpud9oS0LNWrJsY4kW7rpVTFAy3NMcSl+ldaWtEz6xkC997Ku+m0kFzhPOAAbWM3MpBYrkOEtBEfDqk1oPdeQNuqrHEQSxrZF9ToROw4qnXxD38GjYTfS5MIprh7Ry/yOYcRYjzurFHFsfdrgfj4Ly1StLXANLotmm2m5Aie9ZFXFODzDg3KTEG9uf0WPXE/S51X0QRqDB4i32Remf7wP9zQfEr51S/VOIp65Xg+9/IjqFbpfrkADPRdMeybHx0U5VbHvhi3D2WHvcEQ7Qd7g/7D6rw//rnD+7UHcud+t8PsHn/xKfuXs9nUx59wf9/oVUxHabhoGDnd3xC8dU/WOb/jo1HdwHxKpYnH4qrYNFJp3N3R3ozqjY1O1u1S6oGl2Z3wHII6dUDSZJNiAsnC9lBhzZi4nUume9a9IxBi/C1yeWxVyYlxfsDvv+fFWqL5H3UUmieBsbzlJ7hKlwEAzBmIkTHcUwcx1oS6lPQ7/EcPzdHTcNeXyRz+fXuSM3C4iRz3nU/dPDxfx1WY4ZXZgDGpjYaT536q+8c+nOUyPnkPH7rknKOf53rkYb1DKzgbOOW8TlgRx5qcXUA9YjMHDbbuMFVAY9YuEmwMiYFhYTBXMDhuGZtJa0kxOtuWvmtNZnOqDJZ+UOtBAmSPJdWJaIY4ERf1hfv37lVqYJpGab8DIHdaN+K6lRMNgtMzY8txxFtUA1tTMHZQ7aXGTAnbnqu9EQZaCT1kaa6flkBqkGCbaRYC+vXRBDSHagg2vmDjsBaDsgJLgA4kZXEgWgkRaxI12VRuDJEnNlidYkdTAEXVvE1HQJBGUSBYt79pnaAlPa6pDtSLFsCIHEcNEgrYuo0BjSCGx62VwdM6XiB11QfuGS5jiHZd2Q46ak2Ej8K59AhxESc0xMCb7+NtUNQVHEtEAGJtIG9idBEaJGXiXQHNBAANnPc6SOguSqFQEgAXNpgbC43udL81o0cI3gS4kAExEcZ8IsoqQ3i2QdCAPGeHJAY1fDmMgd6pGaIAvJ2BPcqT8FDTMHUAlu+pifmt12HnU2FyJnpolegDdpvc8vBTTjzT+yJuTrpbafJKPY4uDyiRwieq9OynGjbGDsZnpfedEt1CeAgEjgY1CWG89R7GZPrDlpHke5WKPZjBADRabkC44Tey1v2pI/lI4HQcl1OlJOn9vA/m6YVqWEAuLHkSLctFIbJFrTcmI4eKttuTsdxEWjWENWhERcDQ666aoBTaQ03BNwRfmf8AARUmkWI5jbnfmi9HfUX5xfoiLRpwGw5oCaRBAgQTYgDXXWNdZ0RmLSBcbzsSJAlBQBIgEzOpIFv8IwwAHQgcd77WQEt179Nde9NZ5+CRnh1jrrqAE1shKiCgm0xznl5boMIchNN4kGzDsDrl75kJ4PGEurexuJHLwOySh5G/1eChVv3bv/c8nfRSnpY9cym4CSBBsTAAGtpB4dEj0+Z390DQkQI1jSZ2JT20xEyTaZsI5EDXZSSwEGMvNoJMHUHfvWrNL3gzOaBwZE6c5F1XNYhu86XEwBw0/JR1oc6bxAgE8NSTfxKh7YESZB0mQeSAnDhr9TuDOo03kjWFIo8PWuOjZ3Hggw8aZS2bCRJ6lNe0MdmDQSDqfkEBFLDtyl0gQSA02JjYReO5IxEmSdYixm9tBum1mnNmptIg67HlfZLc9xMloE6CY66oCjT9UW5g3gRzA31U5ZIIg2tfS3RWH0QZDucOi0niN0tlO0RA4cefJSavUbNiSJnS7TGlj8ULgSMs98af4RidjoYH0UVCTJMdUjJdSE5RLgN+mu8hBWMmzQ2OF55mdCmAEgRadoKWHXI3FkGE2HqwT0t1QejNiQLAkjnxViuBII1jihLSNNzM/HqkFc0yDytvp5yk1oOnHbvO+qsubuD3zr1Ch07GUBX0s3vBEqGuaDBP27k6YJkTbQIGsvJCAHPIPDYzcpbgIAn47q0aQJjdV3tBtzQYc4EDTuiVLWydJ34I3NmJNwLKaWs/FAS15mBadtExrwJESdDySJn/ACopb3QSyCLKHHbikseSjJU009/kuQ5+S5IPaU6DXAZqoZe4AE8p2VQtAdFJ5PMwClYdpdptfgUt1NxJOaNzxW+s1um3KAZuZGqKk4tmIFtCB4zuqNIuJgm28gQrpoNfmcDECw0AQHUnFwnRsxJJgcYKXXqAxDpgmftKBgJGUNMTxI71Jox4ICxTcSIbII6eKRVFgS0HnPHbkktrNbETfUqPS5tR3fNLTxZDCNYHfMclXqEDQ3TDScWi9vilegPG6NCtUebWCE0LztwCtNA3gkeah7J5dEgrkgTbpyVd2uaDPxVykwRB81WcDNkGBrTGnUFdiKkwQAEbjY5tvNJHkkEEZvV8Suay9pR0zAPNC1pG6AS+n3qXPAFwNIRVHSq7m6JGloI0k/JC6mfDRNJgcUBkpgptyVL4HPknNcMsRJ4pWSbJAIFtEyjU9WCO9JoUy0mTKkAzc2QHAGYRgSlPPBcyqgGQpQSVKnD1/9k=",
  badge: "NEW",
  price: 120,
  discount: 20,
  tags: ["Fashion", "Casual", "Sport"],
  isAvailable: true
})

// Related Products Data
const relatedProducts = ref([
  {
    id: 2,
    name: "Running Shoes",
    price: 90,
    discount: 10,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe7p73xMGyruoKrw7ABUGuH3AIIHV7OB0AOA&s"
  },
  {
    id: 3,
    name: "Casual Boots",
    price: 150,
    discount: 0,
    image: "https://i5.walmartimages.com/asr/1c86f704-e13f-45a0-96e4-f953e189e52b.535720ec8bf7bb26471c975738c902bf.jpeg"
  },
  {
    id: 4,
    name: "Flip Flops",
    price: 30,
    discount: 50,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDsYxuS2I-sTKOlh-I-mgM4U8Mbg0OXuu26zoW7lXGYQ&s"
  }
])

// Computed property for discounted price
const discountedPrice = computed(() => {
  if (mainProduct.value.discount > 0) {
    return mainProduct.value.price - (mainProduct.value.price * mainProduct.value.discount / 100)
  }
  return mainProduct.value.price
})

// Computed property for badge color based on badge text
const badgeColor = computed(() => {
  switch (mainProduct.value.badge) {
    case 'NEW':
      return 'badge-primary'
    case 'SALE':
      return 'badge-error'
    case 'HOT':
      return 'badge-warning'
    default:
      return 'badge-neutral'
  }
})

// Helper function to calculate discounted price for related products
const calculateDiscountedPrice = (price, discount) => {
  if (discount > 0) {
    return price - (price * discount / 100)
  }
  return price
}

</script>

<template>
  <div class="min-h-screen bg-base-200" data-theme="light">
    <!-- Navbar -->
    <div class="navbar bg-base-100 shadow-lg">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">🛒 MyShop</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>Products</a></li>
          <li><a>About</a></li>
        </ul>
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span class="badge badge-sm indicator-item">{{ cartCount }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  

    <div class="container mx-auto px-4 py-8 max-w-7xl">
      
     
      <!-- Main Product Section -->
      <div class="card bg-base-100 shadow-xl mb-10 overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <!-- Product Image -->
          <figure class="relative">
            <img 
              :src="mainProduct.image" 
              :alt="mainProduct.name" 
              class="w-full h-full object-cover min-h-[600px]"
            />
            <div v-if="mainProduct.badge" class="absolute top-4 left-4">
              <div :class="['badge badge-lg font-bold text-white', badgeColor]">
                {{ mainProduct.badge }}
              </div>
            </div>
          </figure>
          
          <!-- Product Details -->
          <div class="card-body p-8">
            <!-- Title -->
            <h2 class="card-title text-4xl font-bold text-base-content">
              {{ mainProduct.name }}
            </h2>
            
            <!-- Rating -->
            <div class="flex items-center gap-2 mt-2">
              <div class="rating rating-md">
                <input type="radio" name="rating-7" class="mask mask-star-2 bg-warning" checked />
                <input type="radio" name="rating-7" class="mask mask-star-2 bg-warning" checked />
                <input type="radio" name="rating-7" class="mask mask-star-2 bg-warning" checked />
                <input type="radio" name="rating-7" class="mask mask-star-2 bg-warning" />
                <input type="radio" name="rating-7" class="mask mask-star-2 bg-warning" />
              </div>
              <span class="text-base-content/60">(42 reviews)</span>
            </div>
            
            <!-- Description -->
            <p class="text-base-content/80 mt-4 text-lg leading-relaxed">
              {{ mainProduct.description }}
            </p>
            
            <!-- Price Section -->
            <div class="mt-6">
              <div class="flex items-baseline gap-4">
                <!-- Discounted Price -->
                <span class="text-4xl font-bold text-primary">
                  ${{ discountedPrice.toFixed(2) }}
                </span>
                
                <!-- Original Price (strikethrough only if discount > 0) -->
                <span v-if="mainProduct.discount > 0" class="text-xl text-base-content/40 line-through">
                  ${{ mainProduct.price.toFixed(2) }}
                </span>
                
                <!-- Discount Badge -->
                <span v-if="mainProduct.discount > 0" class="badge badge-error badge-lg">
                  -{{ mainProduct.discount }}% OFF
                </span>
              </div>
            </div>
            
            <!-- Tags -->
            <div class="mt-6">
              <span class="text-sm font-semibold text-base-content/60">Tags:</span>
              <div class="flex flex-wrap gap-2 mt-2">
                <span 
                  v-for="(tag, index) in mainProduct.tags" 
                  :key="index"
                  class="badge badge-outline badge-lg"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            
            <!-- Stock Status -->
            <div class="mt-6">
              <div v-if="!mainProduct.isAvailable" class="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>This item is currently out of stock!</span>
              </div>
              <div v-else class="alert alert-success">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>In Stock - Ready to ship!</span>
              </div>
            </div>
            
            <!-- Quantity & Add to Cart -->
            <div class="mt-6">
              <div class="flex flex-col sm:flex-row gap-4">
                <div class="join">
                  <button class="btn join-item" @click="quantity > 1 ? quantity-- : null">-</button>
                  <input type="number" v-model="quantity" min="1" class="input input-bordered join-item w-20 text-center" />
                  <button class="btn join-item" @click="quantity++">+</button>
                </div>
                <button 
                  class="btn btn-primary btn-lg flex-1"
                  :disabled="!mainProduct.isAvailable"
                  @click="addToCart(mainProduct)"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {{ mainProduct.isAvailable ? 'Add to Cart' : 'Out of Stock' }}
                </button>
                <button class="btn btn-circle btn-outline" @click="addToCart(mainProduct); toastMessage.value = 'Added to wishlist!'; showToast.value = true; setTimeout(() => showToast.value = false, 3000)">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Related Products Section -->
      <div class="mt-16">
        <div class="flex items-center justify-between mb-8">
          <h3 class="text-3xl font-bold text-base-content">Related Products</h3>
          <button class="btn btn-ghost">View All →</button>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(product, index) in relatedProducts" 
            :key="product.id"
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <figure class="relative">
              <img 
                :src="product.image" 
                :alt="product.name" 
                class="w-full h-48 object-cover"
              />
              <div v-if="product.discount > 0" class="absolute top-2 right-2">
                <div class="badge badge-error font-bold">-{{ product.discount }}%</div>
              </div>
            </figure>
            
            <div class="card-body">
              <h4 class="card-title text-lg">{{ product.name }}</h4>
              
              <!-- Price Section for Related Products -->
              <div class="flex items-baseline gap-2">
                <span class="text-xl font-bold text-primary">
                  ${{ calculateDiscountedPrice(product.price, product.discount).toFixed(2) }}
                </span>
                
                <!-- Original Price (only show if discount > 0) -->
                <span 
                  v-if="product.discount > 0" 
                  class="text-sm text-base-content/40 line-through"
                >
                  ${{ product.price.toFixed(2) }}
                </span>
              </div>
              
              <!-- Rating -->
              <div class="rating rating-sm mt-2">
                <input type="radio" :name="'rating-' + index" class="mask mask-star-2 bg-warning" checked />
                <input type="radio" :name="'rating-' + index" class="mask mask-star-2 bg-warning" checked />
                <input type="radio" :name="'rating-' + index" class="mask mask-star-2 bg-warning" checked />
                <input type="radio" :name="'rating-' + index" class="mask mask-star-2 bg-warning" />
                <input type="radio" :name="'rating-' + index" class="mask mask-star-2 bg-warning" />
              </div>
              
              <!-- Add to Cart Button -->
              <div class="card-actions justify-end mt-4">
                <button class="btn btn-primary btn-sm text-center" @click="addRelatedToCart(product)">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
    <!-- Footer -->
    <footer class="footer footer-center p-10 bg-base-300 text-base-content">
      <div>
        <p class="font-bold">
          MyShop <br/>Since 2026
        </p>
        <p>Copyright © 2026 - All right reserved</p>
      </div>
    </footer>
  </div>
</template>
