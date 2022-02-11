<script>
import { ArchiveIcon } from "@heroicons/vue/solid";

export default {
    props: ["msg"],
    components: {
        ArchiveIcon
    },
    methods: {},
    created() {
    },
    data() {
        return {
            count: 0,
        };
    },
};
</script>

<template>
    <div class="flex">
        <div class="flex-grow">
            <p class="text-4xl pb-3 flex items-center font-black">
                <ArchiveIcon class="h-8 pr-2" />

                Origin/Destinations
            </p>
            <div class="btn-group no-animation pb-2">
                <span class="btn btn-xs bg-blush-500 border-0 hover:bg-blush-500 cursor-default">Available</span>
                <span class="btn btn-xs border-0 cursor-default">30254</span></div>
        </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-20">
        <div class="w-full px-3">
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                    <tr>
                        <th>Year/Month</th>
                        <th>Day Type</th>
                        <th>Hour</th>
                        <th>Origin</th>
                        <th>Destination</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>2020-08</td>
                        <td>WEEKENDS/HOLIDAY</td>
                        <td>8</td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/91099">
                                Bef Wilkinson Rd
                            </a></td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/92091">
                                Opp One Amber
                            </a></td>
                    </tr>
                    <tr>
                        <td>2020-08</td>
                        <td>WEEKENDS/HOLIDAY</td>
                        <td>22</td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/10499">
                                KAMPONG BAHRU TER
                            </a></td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/10191">
                                Blk 78
                            </a></td>
                    </tr>
                    <tr>
                        <td>2020-08</td>
                        <td>WEEKENDS/HOLIDAY</td>
                        <td>12</td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/01211">
                                Opp Blk 461
                            </a></td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/62021">
                                Wisma AUPE
                            </a></td>
                    </tr>
                    <tr>
                        <td>2020-08</td>
                        <td>WEEKDAY</td>
                        <td>17</td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/93019">
                                Neptune Ct
                            </a></td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/66349">
                                Opp Daikin S'pore
                            </a></td>
                    </tr>
                    <tr>
                        <td>2020-08</td>
                        <td>WEEKENDS/HOLIDAY</td>
                        <td>17</td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/93019">
                                Neptune Ct
                            </a></td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/66349">
                                Opp Daikin S'pore
                            </a></td>
                    </tr>
                    <tr>
                        <td>2020-08</td>
                        <td>WEEKDAY</td>
                        <td>7</td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/31051">
                                Pusara Aman Mque
                            </a></td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/44009">
                                Choa Chu Kang Int
                            </a></td>
                    </tr>
                    <tr>
                        <td>2020-08</td>
                        <td>WEEKENDS/HOLIDAY</td>
                        <td>10</td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/01211">
                                Opp Blk 461
                            </a></td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/83111">
                                Blk 17
                            </a></td>
                    </tr>
                    <tr>
                        <td>2020-08</td>
                        <td>WEEKDAY</td>
                        <td>10</td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/01211">
                                Opp Blk 461
                            </a></td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/83111">
                                Blk 17
                            </a></td>
                    </tr>
                    <tr>
                        <td>2020-08</td>
                        <td>WEEKENDS/HOLIDAY</td>
                        <td>15</td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/14171">
                                Opp Yeo's Bldg
                            </a></td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/14369">
                                The Interlace
                            </a></td>
                    </tr>
                    <tr>
                        <td>2020-08</td>
                        <td>WEEKENDS/HOLIDAY</td>
                        <td>15</td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/75009">
                                Tampines Int
                            </a></td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/83059">
                                Mjd Kassim
                            </a></td>
                    </tr>
                    <tr>
                        <td>2020-08</td>
                        <td>WEEKDAY</td>
                        <td>15</td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/75009">
                                Tampines Int
                            </a></td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/83059">
                                Mjd Kassim
                            </a></td>
                    </tr>
                    <tr>
                        <td>2020-08</td>
                        <td>WEEKENDS/HOLIDAY</td>
                        <td>12</td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/84041">
                                Blk 221A
                            </a></td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/84289">
                                Opp Blk 180
                            </a></td>
                    </tr>
                    <tr>
                        <td>2020-08</td>
                        <td>WEEKDAY</td>
                        <td>12</td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/84041">
                                Blk 221A
                            </a></td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/84289">
                                Opp Blk 180
                            </a></td>
                    </tr>
                    <tr>
                        <td>2020-08</td>
                        <td>WEEKENDS/HOLIDAY</td>
                        <td>17</td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/95019">
                                Aft Changi Airport PTB2
                            </a></td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/93029">
                                Mandarin Gdns
                            </a></td>
                    </tr>
                    <tr>
                        <td>2020-08</td>
                        <td>WEEKDAY</td>
                        <td>17</td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/95019">
                                Aft Changi Airport PTB2
                            </a></td>
                        <td class="underline cursor-pointer">
                            <a href="https://chiyuki.amatsuka.me/arrivals/93029">
                                Mandarin Gdns
                            </a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
a {
    @apply text-violet-700;
}
</style>
