<template>
    <div id="app-sidebar-1"
        class="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
        style="width: 280px;">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center px-5 flex-shrink-0" style="height: 60px;">
                <img src="../assets/logo2.png" alt="Image">
            </div>
            <div class="overflow-y-auto">
                <ul class="list-none p-3 m-0">
                    <li><router-link to="/demo"
                            class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                            data-pd-ripple="true"><i class="pi pi-home mr-2"></i><span class="font-medium">Demo’s
                                home</span><span role="presentation" aria-hidden="true" data-p-ink="true"
                                data-p-ink-active="false" class="p-ink" data-pc-name="ripple"
                                data-pc-section="root"></span></router-link></li>
                    <li><router-link to="/home"
                            class="flex align-items-center cursor-pointer p-3 border-round text-700 surface-100 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                            data-pd-ripple="true"><i class="pi pi-user mr-2"></i><span class="font-medium">People
                                directory</span><span role="presentation" aria-hidden="true" data-p-ink="true"
                                data-p-ink-active="false" class="p-ink" data-pc-name="ripple"
                                data-pc-section="root"></span></router-link>
                    </li>
                    <li><router-link to="/jobs"
                            class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                            data-pd-ripple="true"><i class="pi pi-briefcase mr-2"></i><span class="font-medium">Jobs
                                manager</span><span role="presentation" aria-hidden="true" data-p-ink="true"
                                data-p-ink-active="false" class="p-ink" data-pc-name="ripple"
                                data-pc-section="root"></span></router-link></li>
                    <li><router-link to="/stat"
                            class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                            data-pd-ripple="true"><i class="pi pi-chart-bar mr-2"></i><span
                                class="font-medium">Statistics</span><span role="presentation" aria-hidden="true"
                                data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple"
                                data-pc-section="root"></span></router-link></li>
                </ul>
            </div>
            <div class="mt-auto">
                <hr class="mb-3 mx-3 border-top-1 border-none surface-border"><a
                    class="m-3 flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                    data-pd-ripple="true"><i class="pi pi-spin pi-cog mr-2" style="font-size: 1rem"></i><span
                        class="font-medium">Settings</span><span role="presentation" aria-hidden="true" data-p-ink="true"
                        data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SideBar'
    }
</script>