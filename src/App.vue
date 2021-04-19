<template>
   <v-app app>
    <v-navigation-drawer
        permanent
        expand-on-hover
        class="TIT"
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar >
              <v-img src="https://scontent.frba1-1.fna.fbcdn.net/v/t1.6435-9/84923981_599773627481272_4771050728405860352_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeH4g44JXmDMYgmLX_ps-CyPhmfuD5Col2aGZ-4PkKiXZhJZk99Pe5PA1ecvZrKgDWT3L_XAVugz4PQll16nXqeF&_nc_ohc=KYu7yNn_7IMAX-bK8Sn&_nc_ht=scontent.frba1-1.fna&oh=7d87246186eeac1ca7b52d83ffba44b0&oe=609D9A5B"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">
                Baamel Youssef
              </v-list-item-title>
              <v-list-item-subtitle>Admin</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
        <v-list-item link to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/clients">
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Clients</v-list-item-title>
          </v-list-item>
               <v-list-item link to="/suppliers">
            <v-list-item-icon>
              <v-icon>mdi-domain</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Suppliers</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/products">
            <v-list-item-icon>
              <v-icon>mdi-shopping</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Products</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/invoices">
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Invoices</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid >
      
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer >
    <center>
    &copy; Mohammedia Tech 2021
    </center>
    
  </v-footer>
</v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>
